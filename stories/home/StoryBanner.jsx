export function StoryBanner() {
  return (
    <div>
      <div className='flex items-center justify-center gap-3'>
        <a href='https://tsed.dev' target='_blank' rel='noreferrer'>
          <img className='overflow-hidden block' src='https://tsed.dev/tsed-og.png' width='200' alt='Ts.ED logo' />
        </a>
        <a href='https://form.io' target='_blank' rel='noreferrer'>
          <img src='https://portal.form.io/template/images/formio-logo-with-slogan.png' width='200' alt='Form.io logo' />
        </a>
      </div>

      <div className={"text-center pb-5 text-primary font-bold"}>@tsed/react-formio</div>

      <div className='flex items-center justify-center pb-5 mb-5'>
        <div style={{ maxWidth: "400px" }} className='text-center font-bold text-gray-900 dark:text-white'>
          <div style={{ fontSize: "20px" }}>A React library for rendering out forms based on the Form.io platform.</div>
        </div>
      </div>

      <hr />

      <div className='text-center pb-5'>
        <a href='https://tsed.dev/'>Ts.ED</a>
        <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
        <a href='https://tsed.dev/tutorials/prisma.html'>Tutorial</a>
        <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
        <a href='https://slack.tsed.dev'>Slack</a>
        <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
        <a href='https://twitter.com/TsED_io'>Twitter</a>
      </div>

      <hr />

      <div className='text-center pb-5'>
        <div className='flex items-center justify-center gap-3'>
          <a href='https://github.com/tsedio/tsed-formio/actions/workflows/build.yml'>
            <img src='https://github.com/tsedio/tsed-formio/actions/workflows/build.yml/badge.svg' alt='Build & Release' />
          </a>
          <a href='https://github.com/semantic-release/semantic-release'>
            <img src='https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg' alt='semantic-release' />
          </a>
          <a href='https://github.com/prettier/prettier'>
            <img src='https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square' alt='code style: prettier' />
          </a>
          <a href='https://opencollective.com/tsed'>
            <img src='https://opencollective.com/tsed/tiers/badge.svg' alt='backers' />
          </a>
        </div>
      </div>
    </div>
  );
}
