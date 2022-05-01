console.clear();
 let  makeData=async(config)=>{
       

    return await axios(config);
 }


  let getData=()=>{
makeData('https://jsonplaceholder.typicode.com/posts')

.then(res=>{
    console.log(res)
})

.catch(err=>{
    console.log(err)
})
  }


  let sendData=()=>{
      makeData('https://jsonplaceholder.typicode.com/posts',{
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
          }),
      })

      .then(res=>{
          console.log(res)
      })
  }


  let updateData=()=>{
      makeData('https://jsonplaceholder.typicode.com/posts/1',{
        method: 'PUT',
        data: JSON.stringify({
          id: 1,
          title: 'foomamamamamam',
          body: 'bar',
          userId: 1,
        }),
      })

     .then((res)=>{
         console.log(res.data)
     })
  }
  getData();
  sendData();

  updateData();