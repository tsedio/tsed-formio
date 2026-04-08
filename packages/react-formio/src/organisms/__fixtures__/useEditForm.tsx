import { useEffect, useState } from "react";

import { SubmissionType } from "../../interfaces";

function useFetch(url: string, opts: any) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function fetchData() {
    fetch(url, opts)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchData();
  }, [url, opts.method]);

  return { data, loading, error, fetchData };
}

async function updateSubmission(model: string, submissionId: string, submission: SubmissionType["data"]) {
  const response = await fetch(`https://local.dev/form/${model}/submissions/${submissionId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(submission)
  });

  const data = await response.json();

  if (!response.ok) {
    const error: any = new Error("Update submission failed");
    error.errors = [data];
    throw error;
  }

  return data;
}

export function useEditForm({ model, submissionId }: any) {
  const form = useFetch(`https://local.dev/form/${model}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  });

  const submission = useFetch(`https://local.dev/form/${model}/submissions/${submissionId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  });

  function onSubmit(submission: any) {
    return updateSubmission(model, submissionId, submission.data).then((data) => {
      return {
        ...submission,
        data
      };
    });
  }

  return {
    form: form.data,
    data: submission.data,
    loading: form.loading || submission.loading,
    error: form.error || submission.error,
    onSubmit
  };
}
