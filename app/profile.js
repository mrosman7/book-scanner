import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Text, View } from 'react-native';


export default function Profile() {
    const URL = "https://openlibrary.org/isbn/" // need to add .json to end of open library url requests
    const searchIsbn = '0134692888'
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [response, setResponse] = useState();

    useEffect(() => {
      fetch(`${URL}${searchIsbn}.json`)
        // convert response to json object
        .then(res => res.json())
        // set the response to the API result and isLoading to false
        .then(
          (result) => {
            setIsLoading(false);
            setResponse(result);
          },
          // if there is an error set is Loading to false and show error
          (error) => {
            setIsLoading(false);
            setError(error);
          }
        )
    }, []);

    const getContent = () => {
      if (isLoading) {
        // Activity indicator will be shown to user is isLoading is true
        return <ActivityIndicator size="large" />
      }
      if (error) {
        return <Text>{error}</Text>
      }

      console.log(response)
      return <Text>API Called. JSON response: {JSON.stringify(response, null, 2)}</Text>;
    }
  return (
    <View >
      {getContent()}
    </View>
  );
}

