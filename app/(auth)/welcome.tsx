import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useRef, useState } from "react";
import React from "react";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { onboarding } from "@/constants";
import CustomButton from "@/components/CustomButton";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <>
      <SafeAreaView className="flex h-full items-center justify-between bg-white">
        <TouchableOpacity
          className="w-full flex justify-end items-end p-5"
          onPress={() => {
            router.replace("/(auth)/sign-up");
          }}
        >
          <Text className="text-black text-md font-JakartaBold">Skip</Text>
        </TouchableOpacity>
        <Swiper
          onIndexChanged={(index) => {
            setActiveIndex(index);
          }}
          ref={swiperRef}
          dot={<View className="w-[32px] h-[4px] mx-1 bg-[#E2E7F0]" />}
          activeDot={<View className="w-[32px] h-[4px] mx-1 bg-[#0286FF]" />}
          loop={false}
        >
          {onboarding.map((item) => (
            <View
              key={item.id}
              className="flex items-center justify-center p-5"
            >
              <Image
                source={item.image}
                className={"w-full h-[300px]"}
                resizeMode="contain"
              />
              <View className="flex flex-row items-center justify-center w-full mt-10">
                <Text className="text-black text-3xl font-bold mx-10 text-center">
                  {" "}
                  {item.title}{" "}
                </Text>
              </View>
              <View>
                <Text className="text-lg font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">
                  {" "}
                  {item.description}{" "}
                </Text>
              </View>
            </View>
          ))}
        </Swiper>
        <CustomButton
          onPress={() =>
            isLastSlide
              ? router.replace("/(auth)/sign-up")
              : swiperRef.current?.scrollBy(1)
          }
          title={isLastSlide ? "Get Started" : "Next"}
          className="w-11/12 mt-10"
        />
      </SafeAreaView>
    </>
  );
};
export default Onboarding;
