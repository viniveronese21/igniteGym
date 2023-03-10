import { ExerciceCard } from "@components/ExerciceCard";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { useNavigation } from "@react-navigation/native";
import { VStack, FlatList, HStack, Heading, Text } from "native-base";
import { useState } from "react";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

export function Home() {
  const [groups, setGroups] = useState([
    "Costas",
    "Biceps",
    "Triceps",
    "Ombro",
  ]);
  const [exercices, setExercices] = useState([
    "Puxada fronta",
    // "Remada curvada",
    // "Remada unilateral",
    // "Levantamento terra",
  ]);
  const [groupSelected, setGroupSelected] = useState("Costas");

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenExerciceDetails() {
    navigation.navigate("exercise");
  }

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        _contentContainerStyle={{
          px: 8,
        }}
        my={10}
        maxH={10}
        minH={10}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between">
          <Heading color="gray.200" fontSize="md">
            Exercicios
          </Heading>

          <Text color="gray.200" fontSize="sm">
            {exercices.length}
          </Text>
        </HStack>

        <FlatList
          data={exercices}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 10 }}
          renderItem={({ item }) => (
            <ExerciceCard onPress={handleOpenExerciceDetails} />
          )}
        />
      </VStack>
    </VStack>
  );
}
