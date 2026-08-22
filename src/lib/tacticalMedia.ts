// Real Pulse Tactical assets, shared by every section on /pulse-tactical --
// downloaded once from pulse-live-api's own GCS bucket (TacticalWorkout.
// gifUrl, the exact object board.pulseup.io itself renders) straight into
// this repo's public/ folder, so the page doesn't depend on hotlinking prod
// storage. Never a mock/illustration -- every visual on this page is a real
// exported tactic.

// One real animated tactic per sport, in Sports-switcher order (matches
// dict.tacticalPage.sports.list). All 7 have a real GIF in the catalog.
export const SPORT_GIF: Record<string, string> = {
  soccer: "/screenshots/tactical/soccer.gif",
  basketball: "/screenshots/tactical/basketball.gif",
  volleyball: "/screenshots/tactical/volleyball.gif",
  tennis: "/screenshots/tactical/tennis.gif",
  americanFootball: "/screenshots/tactical/american-football.gif",
  iceHockey: "/screenshots/tactical/ice-hockey.gif",
  baseball: "/screenshots/tactical/baseball.gif",
};

export const SPORT_KEYS = [
  "soccer",
  "basketball",
  "volleyball",
  "tennis",
  "americanFootball",
  "iceHockey",
  "baseball",
] as const;

// A handful of real, live plays from the shared community library (same
// pulse_prod TacticalWorkout rows, type: "community" -- same badge shown in
// the board's own "TÁTICAS" panel) for the "Don't start from zero" section.
// Names are the real, as-authored tactic names; no fabricated author since
// the board's own UI doesn't surface one either (just the Community badge).
export const COMMUNITY_TACTICS = [
  { name: "Football - Cone Dribble & Acceleration", sportKey: "soccer", gif: SPORT_GIF.soccer },
  { name: "Basketball - Pass & Relocate", sportKey: "basketball", gif: SPORT_GIF.basketball },
  { name: "Volleyball - Serve & Receive", sportKey: "volleyball", gif: SPORT_GIF.volleyball },
  { name: "Tennis - Rally With Coach", sportKey: "tennis", gif: SPORT_GIF.tennis },
] as const;
