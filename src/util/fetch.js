import gql from "graphql-tag";

export const GET_PROJECTS = gql`
    query{
        getProjects{
            name
            coverPagePicture
	    }
    }
`;

export const GET_N_PROJECTS_GEN_DESC = gql`
    query($first: Int, $next: Int){
        getNProjects(first: $first, next: $next){
            name
            coverPagePicture
	    }
    }
`;

export const GET_PROJECT = gql`
    query($name: String!){
        getProject(name: $name){
            pictureName,
            name,
            mainPicture,
            description,
            demo,
            prevProject,
            nextProject,
            stack{
                name,
                logo,
                logo_dark_mode
            }
        }
    }
`;




