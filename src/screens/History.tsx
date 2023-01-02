import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { Heading, SectionList, Text, VStack } from "native-base";
import { useState } from "react";

export function History() {
  const [exercices, setExercices] = useState([
    {
      title: "26.08.22",
      data: ["Puxada frontal", "Remada unilateral"],
    },
    {
      title: "27.08.22",
      data: ["Puxada frontal"],
    },
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de exercicio" />

      <SectionList
        px={8}
        sections={exercices}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center">
            Não há exercicos registrados ainda{" "}
          </Text>
        )}
        contentContainerStyle={
          exercices.length === 0 && { flex: 1, justifyContent: "center" }
        }
        keyExtractor={(item) => item}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading color="gray.200" fontSize="md" mt={10} mb={3}>
            {section.title}
          </Heading>
        )}
      />
    </VStack>
  );
}
