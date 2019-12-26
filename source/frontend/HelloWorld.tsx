import React from "react"
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import { helloWorld } from "../common/helloWorld";

export const HelloWorld = () => {
    const query = gql`query { helloWorld }`;
    const { data, error, loading } = useQuery(query);
    return <div>
        <div>{"Hello from client: " + helloWorld()}</div>
        <div>{data && "Hello from server: " + data.helloWorld}</div>
    </div>;
};
