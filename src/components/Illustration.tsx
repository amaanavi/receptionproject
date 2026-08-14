// One treatment held for all eight posts: ordinary objects, natural light (a
// soft top-down grade), same crop (square), same ink. No marks for artistic
// ability — consistency reads as intention (§3, Images).

type Props = { name: string };

const INK = "#6f6151";
const INK2 = "#9a8b78";

function Frame({ children, grade = "warm" }: { children: React.ReactNode; grade?: "warm" | "night" | "dark" }) {
  const grades: Record<string, [string, string]> = {
    warm: ["#efe8dc", "#d8cdb9"],
    night: ["#2b3340", "#161b23"],
    dark: ["#20201d", "#0d0d0c"],
  };
  const [a, b] = grades[grade];
  const gid = `g-${grade}`;
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" role="presentation" aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={a} />
          <stop offset="1" stopColor={b} />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill={`url(#${gid})`} />
      {children}
    </svg>
  );
}

const s = { fill: "none", stroke: INK, strokeWidth: 3, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
const s2 = { ...s, stroke: INK2, strokeWidth: 2 };
const sn = { ...s, stroke: "#c9d2df" };
const sn2 = { ...s2, stroke: "#8b98ab" };

export default function Illustration({ name }: Props) {
  switch (name) {
    /* ---- POST 1 · SCHERIA ---- */
    case "hall":
      return (
        <Frame>
          <g {...s}>
            <path d="M40 300h320" />
            <path d="M70 300v-60h260v60" />
            <path d="M70 240h260" />
            <circle cx="130" cy="215" r="14" />
            <circle cx="270" cy="215" r="14" />
            <path d="M200 300v-40" />
            <path d="M175 260h50l-8 40h-34z" />
            <path d="M60 120h280" />
            <path d="M90 120v-30M150 120v-30M250 120v-30M310 120v-30" />
          </g>
          <g {...s2}>
            <path d="M100 240l12-30M300 240l-12-30" />
          </g>
        </Frame>
      );
    case "lyre":
      return (
        <Frame>
          <g {...s}>
            <circle cx="200" cy="60" r="8" />
            <path d="M200 68v14" />
            <path d="M150 110c-34 30-34 120 0 170M250 110c34 30 34 120 0 170" />
            <path d="M150 110h100" />
            <path d="M160 130v130M185 130v130M215 130v130M240 130v130" />
          </g>
        </Frame>
      );
    case "chair":
      return (
        <Frame>
          <g {...s}>
            <path d="M140 190v150M260 190v150" />
            <path d="M140 250h120" />
            <path d="M140 190h120v10H140z" />
            <path d="M150 340v-40M250 340v-40" />
          </g>
          <g {...s2}>
            <path d="M128 235c40-24 100-24 148 0l-6 30c-40-18-96-18-136 0z" />
          </g>
        </Frame>
      );

    /* ---- POST 2 · LOTUS ---- */
    case "lotus":
      return (
        <Frame>
          <g {...s}>
            <path d="M200 330v-90" />
            <g transform="translate(200 195)">
              <ellipse cx="0" cy="-30" rx="16" ry="34" />
              <ellipse cx="0" cy="-30" rx="16" ry="34" transform="rotate(60)" />
              <ellipse cx="0" cy="-30" rx="16" ry="34" transform="rotate(120)" />
              <ellipse cx="0" cy="-30" rx="16" ry="34" transform="rotate(180)" />
              <ellipse cx="0" cy="-30" rx="16" ry="34" transform="rotate(240)" />
              <ellipse cx="0" cy="-30" rx="16" ry="34" transform="rotate(300)" />
              <circle cx="0" cy="0" r="10" />
            </g>
          </g>
          <g {...s2}>
            <path d="M200 300c-30-6-40-30-40-30M200 280c26-4 36-24 36-24" />
          </g>
        </Frame>
      );
    case "rope":
      return (
        <Frame>
          <g {...s}>
            <ellipse cx="200" cy="210" rx="120" ry="70" />
            <ellipse cx="200" cy="210" rx="82" ry="46" />
            <ellipse cx="200" cy="210" rx="44" ry="24" />
          </g>
          <g {...s2}>
            <path d="M40 300h320" />
            <path d="M120 300l14-22M220 300l14-22M300 300l14-22" />
          </g>
        </Frame>
      );

    /* ---- POST 3 · THE CAVE ---- */
    case "cave":
      return (
        <Frame grade="dark">
          <g {...{ ...s, stroke: "#b7ac97" }}>
            <path d="M60 330c0-120 60-190 140-190s140 70 140 190" />
            <path d="M110 330c0-70 40-120 90-120s90 50 90 120" />
          </g>
          <g {...{ ...s2, stroke: "#7d7361" }}>
            <path d="M60 150c30-20 60-10 80-30M340 150c-30-20-60-10-80-30" />
            <path d="M120 330l20-30 20 20 20-30 20 25 20-20 20 25" />
          </g>
        </Frame>
      );
    case "cheeses":
      return (
        <Frame>
          <g {...s}>
            <path d="M60 250h90v70H60z" />
            <path d="M60 250l45-25 45 25M105 225v95" />
            <circle cx="255" cy="245" r="30" />
            <circle cx="315" cy="255" r="24" />
            <path d="M240 300h120v20H240z" />
          </g>
          <g {...s2}>
            <path d="M255 215c10-14 26-14 34 0" />
            <path d="M300 250l14 6" />
          </g>
        </Frame>
      );
    case "doorstone":
      return (
        <Frame grade="dark">
          <g {...{ ...s, stroke: "#b7ac97" }}>
            <ellipse cx="200" cy="215" rx="120" ry="130" />
          </g>
          <g {...{ ...s2, stroke: "#6f6555" }}>
            <path d="M150 160c30 20 70 20 100 0M140 260c40 24 80 24 120 0" />
          </g>
        </Frame>
      );
    case "backwall":
      return (
        <Frame grade="dark">
          <g {...{ ...s2, stroke: "#3a382f" }}>
            <path d="M40 120h320M40 190h320M40 260h320" />
            <path d="M120 120v210M280 120v210" />
          </g>
        </Frame>
      );

    /* ---- POST 4 · NOBODY ---- */
    case "stake":
      return (
        <Frame>
          <g {...s2}>
            <path d="M40 320c40-8 320-8 320 0" />
            <path d="M80 315l10-14M140 318l8-12M300 316l10-14" />
          </g>
          <g {...s}>
            <path d="M120 330L280 150" />
            <path d="M280 150l-6-26 22 10z" />
          </g>
        </Frame>
      );
    case "bowl":
      return (
        <Frame>
          <g {...s}>
            <path d="M110 210c0 60 40 90 90 90s90-30 90-90" transform="rotate(150 200 250)" />
            <ellipse cx="200" cy="250" rx="90" ry="26" transform="rotate(150 200 250)" />
          </g>
        </Frame>
      );
    case "wake":
      return (
        <Frame grade="night">
          <g {...sn2}>
            <path d="M40 150c60-16 120-16 160 0M60 120c50-12 100-12 140 0" />
            <path d="M200 300c-40-40-100-70-160-80M200 300c40-40 100-70 160-80" />
          </g>
          <g {...sn}>
            <path d="M120 340l80-60 80 60" />
          </g>
        </Frame>
      );

    /* ---- POST 5 · AEOLUS ---- */
    case "rampart":
      return (
        <Frame>
          <g {...s}>
            <path d="M40 300h320" />
            <path d="M60 300V180h280v120" />
            <path d="M60 180l20-20h240l20 20" />
          </g>
          <g {...s2}>
            <path d="M100 300V180M160 300V180M220 300V180M280 300V180" />
          </g>
        </Frame>
      );
    case "family":
      return (
        <Frame>
          <g {...s}>
            <path d="M40 250h320v14H40z" />
          </g>
          <g {...s2}>
            <circle cx="90" cy="210" r="16" /><path d="M90 226v24" />
            <circle cx="150" cy="205" r="16" /><path d="M150 221v29" />
            <circle cx="210" cy="210" r="16" /><path d="M210 226v24" />
            <circle cx="270" cy="205" r="16" /><path d="M270 221v29" />
            <circle cx="330" cy="210" r="16" /><path d="M330 226v24" />
          </g>
        </Frame>
      );
    case "bag":
      return (
        <Frame>
          <g {...s}>
            <path d="M130 180c-30 40-30 120 70 140s100-100 70-140" />
            <path d="M130 180c20-16 120-16 140 0" />
            <path d="M150 165c10 8 90 8 100 0" />
          </g>
          <g {...{ ...s2, stroke: "#b9b09a" }}>
            <path d="M150 172c14 8 86 8 100 0" strokeDasharray="6 7" />
          </g>
        </Frame>
      );
    case "fires":
      return (
        <Frame grade="night">
          <g {...{ ...sn2, opacity: 0.85 }}>
            <path d="M40 260h320" />
            <path d="M90 260c-4-16 6-22 4-34 8 8 14 10 12 34" />
            <path d="M180 258c-4-18 6-24 4-38 8 10 14 12 12 38" />
            <path d="M280 260c-4-16 6-22 4-34 8 8 14 10 12 34" />
          </g>
        </Frame>
      );
    case "bronzedoor":
      return (
        <Frame>
          <g {...s}>
            <path d="M120 90h160v230H120z" />
            <path d="M200 90v230" />
          </g>
          <g {...s2}>
            <circle cx="180" cy="210" r="6" /><circle cx="220" cy="210" r="6" />
            <path d="M150 130h20M150 170h20M230 130h20M230 170h20" />
          </g>
        </Frame>
      );

    /* ---- POST 6 · LAESTRYGONIANS ---- */
    case "harbour":
      return (
        <Frame grade="night">
          <g {...{ ...sn, stroke: "#aeb9c9" }}>
            <path d="M40 60c40 90 90 130 90 210H40z" />
            <path d="M360 60c-40 90-90 130-90 210h90z" />
          </g>
          <g {...{ ...sn2, stroke: "#9fb0c6" }}>
            <path d="M130 300h140" />
          </g>
          <g {...{ ...sn2, stroke: "#9fb0c6" }}>
            <path d="M120 320h160M110 345h180" />
          </g>
        </Frame>
      );

    /* ---- POST 7 · AIAIA ---- */
    case "beasts":
      return (
        <Frame>
          <g {...s}>
            <path d="M150 90h100v250H150z" />
          </g>
          <g {...s2}>
            <path d="M175 300c0-30 10-46 24-46s24 16 24 46" />
            <path d="M175 262l-8-14 14 4M223 262l8-14-14 4" />
            <path d="M223 300c8 6 16 6 22 0" />
          </g>
        </Frame>
      );
    case "loom":
      return (
        <Frame>
          <g {...s}>
            <path d="M110 90h180M110 90v240M290 90v240" />
            <path d="M130 110v190M160 110v190M190 110v190M220 110v190M250 110v190M270 110v190" />
          </g>
          <g {...s2}>
            <path d="M110 240h180M110 270h120" />
          </g>
        </Frame>
      );
    case "moly":
      return (
        <Frame>
          <g {...s}>
            <path d="M200 300V150" />
            <g transform="translate(200 130)">
              <ellipse cx="0" cy="-16" rx="12" ry="24" />
              <ellipse cx="0" cy="-16" rx="12" ry="24" transform="rotate(72)" />
              <ellipse cx="0" cy="-16" rx="12" ry="24" transform="rotate(144)" />
              <ellipse cx="0" cy="-16" rx="12" ry="24" transform="rotate(216)" />
              <ellipse cx="0" cy="-16" rx="12" ry="24" transform="rotate(288)" />
            </g>
          </g>
          <g {...{ ...s, stroke: "#2f2a22" }}>
            <path d="M200 300c-24 6-36 26-40 46M200 300c22 6 34 24 40 44M200 320c-14 6-22 20-26 34" />
          </g>
        </Frame>
      );
    case "tablelaid":
      return (
        <Frame>
          <g {...s}>
            <path d="M50 210h300v18H50zM70 228v90M330 228v90" />
          </g>
          <g {...s2}>
            <circle cx="110" cy="200" r="14" /><circle cx="175" cy="200" r="14" />
            <circle cx="240" cy="200" r="14" /><circle cx="305" cy="200" r="14" />
          </g>
        </Frame>
      );
    case "tableempty":
      return (
        <Frame grade="dark">
          <g {...{ ...s, stroke: "#8a8069" }}>
            <path d="M50 210h300v18H50zM70 228v90M330 228v90" />
          </g>
          <g {...{ ...s2, stroke: "#5c5646" }}>
            <circle cx="140" cy="200" r="14" /><circle cx="260" cy="200" r="14" />
          </g>
        </Frame>
      );

    /* ---- POST 8 · ELPENOR ---- */
    case "roof":
      return (
        <Frame grade="night">
          <g fill="#cdd6e4" stroke="none">
            <circle cx="90" cy="80" r="2" /><circle cx="150" cy="60" r="1.6" />
            <circle cx="220" cy="90" r="2.2" /><circle cx="290" cy="70" r="1.6" />
            <circle cx="330" cy="120" r="2" /><circle cx="120" cy="140" r="1.6" />
            <circle cx="200" cy="150" r="2.4" /><circle cx="60" cy="200" r="1.6" />
            <circle cx="340" cy="200" r="2" /><circle cx="260" cy="180" r="1.6" />
            <circle cx="180" cy="220" r="1.6" /><circle cx="300" cy="250" r="1.6" />
          </g>
          <rect x="0" y="330" width="400" height="70" fill="#0b0e13" />
          <path d="M0 330h400" stroke="#3a4250" strokeWidth="3" />
        </Frame>
      );

    default:
      return <Frame>{null}</Frame>;
  }
}
