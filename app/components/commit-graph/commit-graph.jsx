import GitHubCalendar from 'react-github-calendar';

const minimalTheme = {
    dark: ['hsl(0, 0%, 22%)', 'hsl(225,92%,77%)'],
    // for `dark` the default theme will be used
  };

export default function CommitGraph() {
    return <GitHubCalendar username="loeclos" theme={minimalTheme} />;
}