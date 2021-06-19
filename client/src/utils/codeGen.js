 /* eslint-disable */ 
export default (libraries,pinList)=>{
    return `/*  
By Vinayaka Raju S

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files.

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
*/

${libraries}

//Wifi Name
const char* ssid = "XXXXXXXXXXXXX";

//Wifi Password
const char* password = "XXXXXXXXXXX"; 
const char* serverName = "http://iotfirebasebackend.herokuapp.com/api/HardWareEndDetails";

// the following variables are unsigned longs because the time, measured in
// milliseconds, will quickly become a bigger number than can be stored in an int.
unsigned long lastTime = 0;
// Timer set to 10 minutes (600000)
//unsigned long timerDelay = 600000;
// Set timer to 5 seconds (5000)
unsigned long timerDelay = 1000;

String sensorReadings;
String deviceStatusList[5];
String deviceNameList[5];
int pinList[4] = ${pinList};


void setup() {

  for(int i=0; i<sizeof(pinList) ; i++) {
    pinMode(pinList[i], OUTPUT);
  }
  
  Serial.begin(115200);

  WiFi.begin(ssid, password);
  Serial.println("Connecting");
  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to WiFi network with IP Address: ");
  Serial.println(WiFi.localIP());
 
  Serial.println("Timer set to 5 seconds (timerDelay variable), it will take 5 seconds before publishing the first reading.");
}

void loop() {
  //Send an HTTP POST request every 10 minutes
  if ((millis() - lastTime) > timerDelay) {
    //Check WiFi connection status
    if(WiFi.status()== WL_CONNECTED){
              
      sensorReadings = httpGETRequest(serverName);
      Serial.println(sensorReadings);
      JSONVar myObject = JSON.parse(sensorReadings);
  
      // JSON.typeof(jsonVar) can be used to get the type of the var
      if (JSON.typeof(myObject) == "undefined") {
        Serial.println("Parsing input failed!");
        return;
      }
    
      Serial.print("JSON object = ");
      Serial.println(myObject);
    
      // myObject.keys() can be used to get an array of all the keys in the object
      Serial.println(myObject.length());
      for (int i = 0; i < myObject.length(); i++) {
        JSONVar value = myObject[i]["devicestatus"];
        JSONVar key = myObject[i]["devicename"];
        deviceStatusList[i] = value;
        deviceNameList[i] = key;
      }

      for(int i=0; i<myObject.length() ; i++) {
        Serial.print(deviceNameList[i]);
        Serial.print(" = ");
        Serial.println(deviceStatusList[i]);
        if(deviceStatusList[i] == "ON") {
          digitalWrite(pinList[i], HIGH);
        }
        if(deviceStatusList[i] == "OFF") {
          digitalWrite(pinList[i], LOW);
        }
      }
      
    }
    else {
      Serial.println("WiFi Disconnected");
    }
    lastTime = millis();
  }
}


String httpGETRequest(const char* serverName) {
  HTTPClient http;
     
  http.begin(serverName);
  String jsonData = "{\"auth\":\"XXXXXXXXXXXXX\"}";
  http.addHeader("Content-Type", "application/json");
  int httpResponseCode = http.POST(jsonData);  //Place your auth ID Here
  
  String payload = "{}"; 
  
  if (httpResponseCode>0) {
    Serial.print("HTTP Response code: ");
    Serial.println(httpResponseCode);
    payload = http.getString();
  }
  else {
    Serial.print("Error code: ");
    Serial.println(httpResponseCode);
  }
  // Free resources
  http.end();

  return payload;
}       
`
}