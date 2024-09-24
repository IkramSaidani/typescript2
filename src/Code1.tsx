//create an interface for the name prop of the Greeting component to define its type
interface NameType {
    //name should be a string
    name: string;
}
//define the Greeting component
//pass the name as a parameter
//the Greeting return a JSX.Element that displays "Hello, {name}!"
const Greeting:(props:NameType)=> JSX.Element = ({ name }) => { 
return <div>Hello, {name}!</div>;
 };
 export default Greeting;