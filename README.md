## Steps to Reproduce

1. clone the repository
2. `yarn workspace example.com install`
3. `yarn workspace example.com start`
4. go to http://localhost:8000/___graphql
5. run the following query

```
query MyQuery {
  allFile {
    edges {
      node {
        id
        name
      }
    }
  }
}

```

## Expected Result

Expected the files in `example.com/images/` to be shown in the graphql query.

## Actual Result

No files are found, even though `gatsby-source-filesystem` is configured and files are present in the `example.com/images/` directory.
