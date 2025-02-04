
const WithExtraProp = (WrappedComponent) =>{
    return function WithExtraProp(props){
        return <WrappedComponent extaProp={"hello"} {...props} />
    }

}


const HOC = ({extaProp})=>{
    return (
        <div>{extaProp}</div>
    )
}

const MyComponentWithExtraProp = WithExtraProp(HOC)

export default MyComponentWithExtraProp