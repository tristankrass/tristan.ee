import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const Github = () => {
  const { github } = useStaticQuery(
    graphql`
      query {
        github {
          repositoryOwner(login: "tristankrass") {
            avatarUrl
            repositories(
              first: 7
              orderBy: { field: STARGAZERS, direction: DESC }
            ) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  return (
    <div style={{ margin: '20rem' }}>
      <h1>Github</h1>

      {github.repositoryOwner.repositories.edges.map(edge => {
        <p>1</p>;
      })}
      {[...github.repositoryOwner.repositories.edges].map(a => {
        return <p>{a.node.name}</p>;
      })}
    </div>
  );
};
