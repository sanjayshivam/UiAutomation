async function display(){
    console.log('printing statement 1...........')

    await new Promise((res)=>{
        setTimeout(()=>{
            res()
        console.log('printing statement 2...........')
    },3000)
    })

    console.log('printing statement 3...........')
}
display()