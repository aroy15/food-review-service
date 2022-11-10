export const setAuthToken = (user) => {
    const currentUser = {
        email:user.email
    }

    fetch(`https://b6a11-service-review-server-side-aroy15.vercel.app/jwt`, {
        method:'POST',
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)

        // local storage is the easiest but not the best place to store jwt token
        localStorage.setItem('food-token', data.token)

    })
    .catch(err => console.log(err))
};