// import { Input } from 'native-base/lib/typescript/src';
// import { Avatar } from 'native-base/lib/typescript/src';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Avatar } from 'react-native-elements';

const Form = styled.View`
    padding: 1px;
`;
const StyledInput = styled.TextInput`
    border: 1px solid gray;
    font-size: 18px;
    padding: 8px;
    margin-bottom: 25px;
`;
const FormLabel = styled.Text`
    font-size: 16px;
    color: #585858;
`;
const FormBtn = styled.TouchableOpacity`
    background: #0077cc;
    width: 100%;
    padding: 8px;
`;
const BtnText = styled.Text`
    text-align: center;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
`;
const SignUp = styled.TouchableOpacity`
 margin-top: 20px;
`;
const Link = styled.Text`
 color: #0077cc;
 font-weight: bold;
`;
const UserForm = props => {
 const [email, setEmail] = useState();
 const [password, setPassword] = useState();
 const [username, setUsername] = useState();
const handleSubmit = () => {
  props.action({
   variables: {
    name: name,
    year: year,
    branch: branch,
    bio : bio
    
   }
  });
 };
 const styles = {
    wrapper: {
      flex: 1,
      marginTop: 50,
      marginRight:35,
      marginLeft: 35
    },
    text: {
        marginTop: 60,
        marginRight:20,
        marginLeft: 130,
        fontSize: 27,
        fontWeight: 'bold'
    },
    submit:{
        marginRight:1,
        marginLeft:1,
        marginTop:10,
        paddingTop:5,
        paddingBottom:20,
        borderRadius:5,
        borderWidth: 1,
        borderColor: '#C8C8C8'
      },
      submitText:{
          color:'#fff',
          textAlign:'center',
      }
  };
return (

    <React.Fragment>
        <Text style={styles.text}>Edit Profile</Text>
  <Avatar
  source={{
    uri:
      'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  }}
  containerStyle={{flex: 0, marginLeft: 140, marginTop: 20}}
  size={100}
  rounded
  >
</Avatar>

  <Form style={styles.wrapper}>
   <FormLabel>Name</FormLabel>
   <StyledInput style={styles.submit}
    textContentType="name"
    autoFocus={true}
    autoCapitalize="none"
   />

     <FormLabel>Year of Joining</FormLabel>
     <StyledInput style={styles.submit}
      onChangeText={text => setUsername(text)}
      autoCapitalize="none"
     />
   
<FormLabel>Branch</FormLabel>
   <StyledInput style={styles.submit}
   />
   <FormLabel>Bio</FormLabel>
   <StyledInput onChangeText={text=> setInput({...input, body:text})}
            multiline={true}
            numberOfLines={3}
            placeholder=""
            underlineColorAndroid='transparent'
            require={true} style={{ height:80,marginRight:1,
            marginLeft:1,
            marginTop:10,
            paddingTop:5,
            paddingBottom:20,
            borderRadius:5,
            borderWidth: 1,
            borderColor: '#C8C8C8' }} type="textarea" 
            name="textValue"
        />
   <FormBtn onPress={handleSubmit} style={styles.submit}>
                <BtnText>Done</BtnText>
            </FormBtn>

            
   
   {/* {props.formType !== 'signUp' && (
    <SignUp onPress={() => props.navigation.navigate('SignUp')}>
     <Text>
      Need an account? <Link>Sign up.</Link>
     </Text>
    </SignUp>
   )} */}
  </Form>
  </React.Fragment>
 );
}
export default UserForm;
