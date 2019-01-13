import Button from '../components/Button';
import Input from '../components/Input';

const Form = (props) => {
  return (
    <div>
      <div className='formContainer'>
        <Input placeholder={props.placeholder} />
        <Button title={props.title} />
      </div>
      <style jsx>{`
        .formContainer {
          display: flex;
        }          
      `}</style>
    </div>
  )
}

export default Form;
