<template>
  <div
    class="app-bar-top fixed z-40 top-0 px-4 py-3 right-0 left-0 flex items-center bg-blue-700"
  >
    <span
      class="material-icons align-top mr-8 text-white"
      @click="$emit('click')"
      >menu</span
    >
    <span class="text-white text-2xl font-semibold italic">vo</span>
    <span class="text-white text-2xl font-medium italic">zi</span>
    <span class="text-white text-2xl italic">la</span>
    <div class="relative z-10 w-32 ml-auto mr-6">
      <span
        class="absolute top-0 -z-10 left-0 right-0 bg-blue-500 bg-opacity-50"
        style="height: 4px"
      ></span>
      <span
        class="absolute top-0 -z-10 left-0 right-0 bg-red-200 bg-opacity-50"
        style="height: 3px; transform: translateY(4px)"
      ></span>
      <span
        class="absolute top-0 -z-10 left-0 right-0 bg-green-100 bg-opacity-50"
        style="height: 1px; transform: translateY(7px)"
      ></span>
      <select
        v-model="currentFont"
        dir="rtl"
        class="bg-transparent appearance-none w-full text-white text-2xl"
      >
        <option
          class="text-black"
          v-for="font in fonts"
          :value="font"
          :key="font"
        >
          {{ font }}
        </option>
      </select>
      <span
        class="absolute bottom-0 -z-10 left-0 right-0 bg-green-100 bg-opacity-50"
        style="height: 1px; transform: translateY(-7px)"
      ></span>
      <span
        class="absolute bottom-0 -z-10 left-0 right-0 bg-red-200 bg-opacity-50"
        style="height: 3px; transform: translateY(-4px)"
      ></span>
      <span
        class="absolute bottom-0 -z-10 left-0 right-0 bg-blue-500 bg-opacity-50"
        style="height: 4px"
      ></span>
    </div>
    <span class="material-icons text-white" @click="pickNext">format_size</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "AppBarTop",

  emits: {
    click: null,
  },

  setup: () => {
    const [font] = document.body.style.fontFamily.split(", ");
    const currentFont = ref(font || "");
    const fonts: string[] = [
      // "ABeeZee",
      // "Abel",
      // "Aclonica",
      // "Acme",
      // "Actor",
      // "Advent Pro",
      "Alata",
      "Alatsi",
      "Aldrich",
      "Alef",
      "Alegreya Sans",
      "Alegreya Sans SC",
      "Allerta",
      // "Allerta Stencil",
      "Almarai",
      // "Amaranth",
      "Amiko",
      "Anaheim",
      // "Andika",
      // "Andika New Basic",
      "Antic",
      // "Anton",
      "Archivo",
      // "Archivo Black",
      "Archivo Narrow",
      "Arimo",
      "Armata",
      "Arsenal",
      "Arya",
      "Asap",
      "Asap Condensed",
      "Assistant",
      // "Asul",
      "Athiti",
      "Average Sans",
      "B612",
      "Bai Jamjuree",
      "Barlow",
      "Barlow Condensed",
      "Barlow Semi Condensed",
      "Basic",
      "Be Vietnam",
      "Belleza",
      "BenchNine",
      "Biryani",
      "Black And White Picture",
      "Black Han Sans",
      "Blinker",
      "Bubbler One",
      "Cabin",
      "Cabin Condensed",
      "Cagliostro",
      "Cairo",
      "Cambay",
      "Candal",
      "Cantarell",
      "Cantora One",
      "Capriola",
      "Carme",
      "Carrois Gothic",
      "Carrois Gothic SC",
      "Catamaran",
      "Chakra Petch",
      "Changa",
      "Chathura",
      "Chau Philomene One",
      "Chivo",
      "Coda Caption",
      "Commissioner",
      "Convergence",
      "Cuprum",
      "DM Sans",
      "Darker Grotesque",
      "Days One",
      "Denk One",
      "Dhurjati",
      "Didact Gothic",
      "Do Hyeon",
      "Doppio One",
      "Dorsa",
      "Dosis",
      "Duru Sans",
      "Economica",
      "El Messiri",
      "Electrolize",
      "Encode Sans",
      "Encode Sans Condensed",
      "Encode Sans Expanded",
      "Encode Sans Semi Condensed",
      "Encode Sans Semi Expanded",
      "Englebert",
      "Epilogue",
      "Exo",
      "Exo 2",
      "Fahkwang",
      "Farro",
      "Federo",
      "Fira Sans",
      "Fira Sans Condensed",
      "Fira Sans Extra Condensed",
      "Fjalla One",
      "Francois One",
      "Fresca",
      "GFS Neohellenic",
      "Gafata",
      "Galdeano",
      "Gayathri",
      "Geo",
      "Gidugu",
      "Gothic A1",
      "Gotu",
      "Gudea",
      "Hammersmith One",
      "Harmattan",
      "Heebo",
      "Hind",
      "Hind Guntur",
      "Hind Madurai",
      "Hind Siliguri",
      "Hind Vadodara",
      "Homenaje",
      "IBM Plex Sans",
      "IBM Plex Sans Condensed",
      "Imprima",
      "Inder",
      "Inria Sans",
      "Inter",
      "Istok Web",
      "Jaldi",
      "Jockey One",
      "Josefin Sans",
      "Jost",
      "Jua",
      "Julius Sans One",
      "Jura",
      "K2D",
      "Kanit",
      "Kantumruy",
      "Karla",
      "Khand",
      "Khula",
      "Kite One",
      "KoHo",
      "Kodchasan",
      "Kosugi",
      "Kosugi Maru",
      "Krona One",
      "Krub",
      "Kulim Park",
      "Kumbh Sans",
      "Lato",
      "Lekton",
      "Lexend Deca",
      "Lexend Exa",
      "Lexend Giga",
      "Lexend Mega",
      "Lexend Peta",
      "Lexend Tera",
      "Lexend Zetta",
      "Libre Franklin",
      "Livvic",
      "M PLUS 1p",
      "M PLUS Rounded 1c",
      "Mada",
      "Magra",
      "Mako",
      "Mallanna",
      "Mandali",
      "Manjari",
      "Manrope",
      "Marmelad",
      "Martel Sans",
      "Marvel",
      "Maven Pro",
      "Meera Inimai",
      "Merriweather Sans",
      "Metrophobic",
      "Michroma",
      "Mina",
      "Miriam Libre",
      "Mitr",
      "Molengo",
      "Monda",
      "Montserrat",
      "Montserrat Alternates",
      "Montserrat Subrayada",
      "Mouse Memoirs",
      "Mukta",
      "Mukta Mahee",
      "Mukta Malar",
      "Mukta Vaani",
      "Mulish",
      "NTR",
      "Nanum Gothic",
      "News Cycle",
      "Niramit",
      "Nobile",
      "Notable",
      "Noto Sans",
      "Noto Sans HK",
      "Noto Sans JP",
      "Noto Sans KR",
      "Noto Sans SC",
      "Noto Sans TC",
      "Numans",
      "Nunito",
      "Nunito Sans",
      "Open Sans",
      "Open Sans Condensed",
      "Orbitron",
      "Orienta",
      "Oswald",
      "Overpass",
      "Oxygen",
      "PT Sans",
      "PT Sans Caption",
      "PT Sans Narrow",
      "Padauk",
      "Palanquin",
      "Palanquin Dark",
      "Pathway Gothic One",
      "Pattaya",
      "Pavanam",
      "Paytone One",
      "Philosopher",
      "Play",
      "Pontano Sans",
      "Poppins",
      "Port Lligat Sans",
      "Pragati Narrow",
      "Prompt",
      "Proza Libre",
      "Public Sans",
      "Puritan",
      "Quantico",
      "Quattrocento Sans",
      "Questrial",
      "Quicksand",
      "Rajdhani",
      "Raleway",
      "Ramabhadra",
      "Rambla",
      "Rationale",
      "Recursive",
      "Red Hat Display",
      "Red Hat Text",
      "Reem Kufi",
      "Roboto",
      "Roboto Condensed",
      "Ropa Sans",
      "Rosario",
      "Rubik",
      "Rubik Mono One",
      "Ruda",
      "Ruluko",
      "Rum Raisin",
      "Russo One",
      "Saira",
      "Saira Condensed",
      "Saira Extra Condensed",
      "Saira Semi Condensed",
      "Sansita",
      "Sarabun",
      "Sarala",
      "Sarpanch",
      "Sawarabi Gothic",
      "Sawarabi Mincho",
      "Scada",
      "Secular One",
      "Sen",
      "Seymour One",
      "Shanti",
      "Share Tech",
      "Signika",
      "Signika Negative",
      "Sintony",
      "Six Caps",
      "Snippet",
      "Sora",
      "Source Sans Pro",
      "Space Grotesk",
      "Spartan",
      "Spinnaker",
      "Strait",
      "Stylish",
      "Sulphur Point",
      "Sunflower",
      "Syncopate",
      "Syne",
      "Tajawal",
      "Tauri",
      "Teko",
      "Telex",
      "Tenali Ramakrishna",
      "Tenor Sans",
      "Text Me One",
      "Thasadith",
      "Timmana",
      "Titillium Web",
      "Tomorrow",
      "Trispace",
      "Ubuntu",
      "Ubuntu Condensed",
      "Varela",
      "Varela Round",
      "Varta",
      "Viga",
      "Voltaire",
      "Wendy One",
      "Wire One",
      "Work Sans",
      "Yanone Kaffeesatz",
      "Yantramanav",
    ];

    watch(currentFont, () => {
      const link = document.querySelector("#font") as HTMLLinkElement;
      const body = document.querySelector("body") as HTMLElement;

      if (link === null || body === null) {
        return;
      }

      link.href = `https://fonts.googleapis.com/css2?family=${currentFont.value.replaceAll(
        " ",
        "+"
      )}:wght@400;500;600;700&display=swap`;
      body.style.fontFamily = `"${currentFont.value}", sans-serif`;
    });

    return {
      currentFont,
      fonts,
      pickNext: () => {
        const currentIndex = fonts.findIndex((i) => currentFont.value === i);
        const nextFont = fonts[currentIndex + 1] || fonts[0];
        currentFont.value = nextFont;
      },
    };
  },
});
</script>

<style>
.app-bar-top {
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
}
</style>
