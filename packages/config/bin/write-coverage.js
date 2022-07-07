#!/usr/bin/env node
import fs from "fs-extra";
import { join } from "path";

async function writeCoverage(cwd) {
  const coveragePath = join(cwd, "coverage.json");

  const {
    total: { lines, statements, functions, branches }
  } = await fs.readJson(join(cwd, "coverage/coverage-summary.json"));

  fs.writeJson(
    coveragePath,
    {
      statements: statements.pct,
      branches: branches.pct,
      functions: functions.pct,
      lines: lines.pct
    },
    { spaces: 2 }
  );
}

writeCoverage(process.cwd());
