export interface Options {
  key: string;
  value: string;
}

export const attendOptions: Options[] = [
  {
    key: "yes",
    value: "Yes"
  },
  {
    key: "no",
    value: "No"
  },
  {
    key: "maybe",
    value: "Maybe..."
  }
]

export const arrivalOptions: Options[] = [
  {
    key: "already",
    value: "I am already in the area"
  },
  {
    key: "17",
    value: "The D-Day, Saturday 17th of June"
  },
  {
    key: "16",
    value: "The Friday 16th of June"
  },
  {
    key: "before",
    value: "Few days before"
  },
  {
    key: "idk",
    value: "I don't know yet"
  }
]

export const transportOptions: Options[] = [
  {
    key: "car",
    value: "By car"
  },
  {
    key: "taxi",
    value: "By taxi"
  },
  {
    key: "train",
    value: "By train"
  },
  {
    key: "idk",
    value: "I don't know yet"
  },
]

export const eventOptions: Options[] = [
  {
    key: "morning",
    value: "Only morning Ceremony in the City Hall of Le Grau du Roi which starts at 11am"
  },
  {
    key: "afternoon",
    value: "Only afternoon Ceremony in the Mas de la Montille – Aigues Morte which starts at 2pm"
  },
  {
    key: "boat",
    value: "Only reception on the Canal Boat which starts at 6pm"
  },
  {
    key: "morning,afternoon",
    value: "Both Ceremonies only"
  },
  {
    key: "morning,boat",
    value: "Morning Ceremony and boat"
  },
  {
    key: "afternoon,boat",
    value: "Afternoon Ceremony and Reception boat"
  },
  {
    key: "morning,afternoon,boat",
    value: "All events 🎉"
  },
]

export const musicOptions: Options[] = [
  {
    key: "general",
    value: "General"
  },
  {
    key: "dance-electro",
    value: "Dance/Electro"
  },
  {
    key: "pop-rock",
    value: "Pop/Rock"
  },
  {
    key: "funk",
    value: "Funk"
  },
  {
    key: "rap",
    value: "Rap"
  },
  {
    key: "disco",
    value: "Disco"
  },
  {
    key: "latino",
    value: "Latino"
  },
  {
    key: "v-pop",
    value: "V-pop"
  },
  {
    key: "80",
    value: "80s"
  }
]

export const yesNoOption: Options[] = [
  {
    key: "yes",
    value: "Yes"
  },
  {
    key: "no",
    value: "No"
  }
]
