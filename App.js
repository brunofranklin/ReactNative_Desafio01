import React from "react";
import {View} from 'react-native';



const Dimensoes = () => {

   return (
      
      <View style={{ justifyContent:'flex-start', alignItems: 'center'}}>
         <View style={{width:390, height:25, backgroundColor:'#50e3c2'}}/>
      
         <View style={{ justifyContent:'center', alignItems: 'center', padding:20}}>
         <View style={{width:100, height:100, backgroundColor:'#f5a623'}}/> 
      </View>

      <View style={{ justifyContent:'center', alignItems: 'center', padding:20}}>
         <View style={{width:150, height:30, backgroundColor:'#f5a623'}}/> 
      </View>

      <View style={{ flexDirection:'row', alignItems: 'center'}}>
         <View style={{width:195, height:78, backgroundColor:'#9013fe'}}/>
         <View style={{width:195, height:78, backgroundColor:'#4a90e2'}}/> 
      </View>

      <View style={{ justifyContent:'center', alignItems: 'center'}}>
      <View style={{width:390, height:13, backgroundColor:'#50e3c2'}}/>
      </View>

      <View style={{justifyContent:'space-around', flexDirection:'row', alignItems: 'center', padding:30}}>
         <View style={{width:100, height:100, backgroundColor:'#f5a623'}}/>
         <View style={{width:100, height:100, backgroundColor:'#f5a623'}}/>
         <View style={{width:100, height:100, backgroundColor:'#f5a623'}}/>
      </View>

      <View style={{justifyContent:'space-around', flexDirection:'row', alignItems: 'center', padding:30}}>
         <View style={{width:100, height:100, backgroundColor:'#f5a623'}}/>
         <View style={{width:100, height:100, backgroundColor:'#f5a623'}}/>
         <View style={{width:100, height:100, backgroundColor:'#f5a623'}}/>
      </View>

      <View style={{ justifyContent:'flex-end', alignItems: 'center'}}>
         <View style={{width:390, height:60, backgroundColor:'#4a90e2'}}/>
      </View> 
        
     </View>
      
   );
};

export default Dimensoes;