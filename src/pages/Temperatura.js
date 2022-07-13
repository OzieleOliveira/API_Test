import { View, Text, Button, TextInput } from "react-native";
import { useState } from "react";
import axios from "axios";


export default props => {
    const [temperatura, setTemperatura] = useState("")
    const [temperaturaResultado, setTemperaturaResultado] = useState({})

    async function buscarTemperatura(){
       const resultado = await axios.get('https://goweather.herokuapp.com/weather/'+temperatura+'')
        setTemperaturaResultado (resultado.data)
    }
    return(
        <View>
            <Text>Tela CEP</Text>
            <TextInput 
             placeholder= "CEP somente Números"
             onChangeText={setTemperatura}
            />
            <Button 
              title="Pesquisar"
              onPress={buscarTemperatura}
            />
            <Text>Logradouro:{temperaturaResultado.temperature}</Text>
            <Text>Bairro:{temperaturaResultado.wind}</Text>
           

        </View>
    )
}