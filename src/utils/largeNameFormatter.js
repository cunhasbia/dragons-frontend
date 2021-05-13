export default function largeNameFormatter(text) {
    let name = text.substr(0, 35);

    if (name.length >= 35) {
      name += "...";
    }

    return name;
}