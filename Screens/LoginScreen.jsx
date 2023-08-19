import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { useState, useEffect } from "react";

const bgImage = require("../assets/images/background.jpg");

export default function RegistrationScreen() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const toglePassword = () => {
    setIsPasswordShown((prevState) => {
      return !prevState;
    });
  };

  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={styles.container}>
        <ImageBackground source={bgImage} style={styles.bgImage}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                // marginBottom: keyboardStatus ? -240 : 0,
              }}
            >
              <View style={{ marginHorizontal: 16 }}>
                <Text style={styles.registrationTitle}>Увійти</Text>
                <TextInput
                  placeholderTextColor="#BDBDBD"
                  style={styles.input}
                  placeholder="Адреса електронної пошти"
                />
                <TextInput
                  name="password"
                  style={{ ...styles.input, paddingRight: 100 }}
                  placeholder="Пароль"
                  placeholderTextColor="#BDBDBD"
                  secureTextEntry={isPasswordShown}
                  clearButtonMode="always"
                />
                <TouchableOpacity
                  style={styles.btnShowPassword}
                  activeOpacity={0.8}
                  onPress={toglePassword}
                >
                  <Text style={styles.btnShowPasswordText}>
                    {isPasswordShown ? "Показати" : "Сховати"}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.btn}
                  activeOpacity={0.8}
                  onPress={hideKeyboard}
                >
                  <Text style={styles.btnText}>Увійти</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.link} activeOpacity={0.8}>
                  <Text style={styles.linkText}>
                    Немає акаунту? Зареєструватися
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
  },

  form: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 32,
    paddingBottom: 111,
  },
  registrationTitle: {
    marginBottom: 33,
    textAlign: "center",
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    color: "#212121",
  },
  input: {
    marginBottom: 16,
    height: 50,
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    fontFamily: "Roboto-Regular",
  },

  btnShowPassword: {
    position: "absolute",
    top: 152,
    right: 20,
  },
  btnShowPasswordText: {
    fontSize: 16,
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
  },
  btn: {
    borderWidth: 1,
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginTop: 43,
    backgroundColor: "#FF6C00",
    borderColor: "transparent",
  },
  btnText: {
    fontSize: 16,
    textAlign: "center",
    color: "#ffffff",
    fontFamily: "Roboto-Regular",
  },
  link: {},
  linkText: {
    marginTop: 16,
    fontSize: 16,
    textAlign: "center",
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
  },
});
