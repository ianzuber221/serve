export type ClothingCategory =
  | "tops"
  | "bottoms"
  | "dresses"
  | "outerwear"
  | "shoes"
  | "accessories"

export type Mood = "soft" | "bold" | "cozy" | "date" | "errands"

export type WardrobePiece = {
  id: string
  name: string
  category: ClothingCategory
  color: string
  mood: Mood[]
  occasions: string[]
  accent: string
}

export const CATEGORIES: ClothingCategory[] = [
  "tops",
  "bottoms",
  "dresses",
  "outerwear",
  "shoes",
  "accessories",
]

export const MOODS: { id: Mood; label: string }[] = [
  { id: "soft", label: "Soft girl" },
  { id: "bold", label: "Main character" },
  { id: "cozy", label: "Cozy core" },
  { id: "date", label: "Date night" },
  { id: "errands", label: "Cute errands" },
]

export const wardrobeSeed: WardrobePiece[] = [
  {
    id: "top-01",
    name: "Butter yellow baby tee",
    category: "tops",
    color: "#F5D76E",
    mood: ["soft", "errands"],
    occasions: ["day", "casual"],
    accent: "#FFF4C2",
  },
  {
    id: "top-02",
    name: "Cherry satin cami",
    category: "tops",
    color: "#C23B4A",
    mood: ["bold", "date"],
    occasions: ["night", "date"],
    accent: "#F7C8CE",
  },
  {
    id: "top-03",
    name: "Cloud knit tank",
    category: "tops",
    color: "#F2E9E4",
    mood: ["soft", "cozy"],
    occasions: ["home", "casual"],
    accent: "#FFE8F0",
  },
  {
    id: "bot-01",
    name: "Low-rise denim mini",
    category: "bottoms",
    color: "#6B8CAE",
    mood: ["soft", "errands", "bold"],
    occasions: ["day", "casual"],
    accent: "#D7E4F2",
  },
  {
    id: "bot-02",
    name: "Wide cream trousers",
    category: "bottoms",
    color: "#E8DFD0",
    mood: ["soft", "date"],
    occasions: ["day", "work"],
    accent: "#F7F1E8",
  },
  {
    id: "bot-03",
    name: "Matcha cargo pants",
    category: "bottoms",
    color: "#A8B87A",
    mood: ["errands", "cozy"],
    occasions: ["day", "casual"],
    accent: "#E4EDC8",
  },
  {
    id: "drs-01",
    name: "Strawberry ribbon dress",
    category: "dresses",
    color: "#E87A8A",
    mood: ["soft", "date"],
    occasions: ["day", "date"],
    accent: "#FFD6DE",
  },
  {
    id: "drs-02",
    name: "Midnight slip dress",
    category: "dresses",
    color: "#2C2438",
    mood: ["bold", "date"],
    occasions: ["night", "date"],
    accent: "#D9C6E8",
  },
  {
    id: "out-01",
    name: "Fuzzy pink cardi",
    category: "outerwear",
    color: "#F4A5B8",
    mood: ["soft", "cozy"],
    occasions: ["day", "home"],
    accent: "#FFE0EA",
  },
  {
    id: "out-02",
    name: "Cropped leather moto",
    category: "outerwear",
    color: "#1A1A1A",
    mood: ["bold"],
    occasions: ["night", "casual"],
    accent: "#E5E5E5",
  },
  {
    id: "sho-01",
    name: "Ballet flats, scuffed just right",
    category: "shoes",
    color: "#C9A98A",
    mood: ["soft", "date", "errands"],
    occasions: ["day", "date"],
    accent: "#F0E4D8",
  },
  {
    id: "sho-02",
    name: "Chunky white sneakers",
    category: "shoes",
    color: "#FAFAFA",
    mood: ["errands", "cozy"],
    occasions: ["day", "casual"],
    accent: "#F0F0F0",
  },
  {
    id: "acc-01",
    name: "Tiny gold hoops",
    category: "accessories",
    color: "#D4AF37",
    mood: ["soft", "date", "bold"],
    occasions: ["day", "night"],
    accent: "#FFF0C2",
  },
  {
    id: "acc-02",
    name: "Cherry lip gloss pouch",
    category: "accessories",
    color: "#D64545",
    mood: ["bold", "date"],
    occasions: ["day", "night"],
    accent: "#FFD0D0",
  },
  {
    id: "acc-03",
    name: "Oversized tortoiseshell sunnies",
    category: "accessories",
    color: "#6B4E3D",
    mood: ["errands", "bold"],
    occasions: ["day"],
    accent: "#E8D5C4",
  },
]
