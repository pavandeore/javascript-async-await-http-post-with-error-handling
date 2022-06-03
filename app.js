const asyncPostCall = async () => {
      try {  
        const response = await fetch('https://jsonplaceholder.typicode.com/blah', {
              method: 'POST',
              headers: {
                   'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                      title: "My post title",
                      body: "My post content."
                    })
              });
            if (response.status == 404) {
                console.error('PAGE NOR FOUND');
            } else {
                const data = await response.json();
                console.log(data);
            }
          } 
  catch(error) {
          console.log('error -',error)
        } 
  }
asyncPostCall()
