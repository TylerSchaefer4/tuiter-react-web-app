import TuitSummaryItem from "../tuit-summary-list/tuit-summary-item";
import javaLogo from "../tuit-summary-list/images/java-logo.png";
function ExploreScreen() {
  return (
    <div>
      <h1>Explore</h1>
      <TuitSummaryItem
        tuit={{
          topic: "Tesla",
          userName: "tesla",
          time: "4d",
          title:
            "Tesla FSD finally makes driving obsolete. After years of delay, Tesla Full Self Driving can drive you to work while you work, play, or sleep",
          // image: javaLogo,
          image: "java-logo.png",
        }}
      />
      <TuitSummaryItem />
      <TuitSummaryItem
        tuit={{
          topic: "Tesla",
          userName: "tesla",
          time: "4d",
          title:
            "Tesla FSD finally makes driving obsolete. After years of delay, Tesla Full Self Driving can drive you to work while you work, play, or sleep",
          // image: javaLogo,
          image: "java-logo.png",
        }}
      />
    </div>
  );
}
export default ExploreScreen;
