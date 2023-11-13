import gql from 'apollo-boost';

export const getProjectsQuery = gql`
  {
    projects {
      id
      title
    }
  }
`;

export const getTasksQuery = gql`
  {
    tasks {
      id
      title
    }
  }
`;
