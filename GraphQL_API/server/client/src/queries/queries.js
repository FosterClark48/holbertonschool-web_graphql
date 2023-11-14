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

export const addTaskMutation = gql`
  mutation($title: String!, $weight: Int!, $description: String!, $projectId: ID!) {
    addTask(title: $title, weight: $weight, description: $description, projectId: $projectId) {
      title
      id
    }
  }
`;

export const addProjectMutation = gql`
  mutation($title: String!, $weight: Int!, $description: String!) {
    addProject(title: $title, weight: $weight, description: $description) {
      title
      id
    }
  }
`;
