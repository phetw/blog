workflow "Web page test on push" {
  resolves = ["WebPageTestAction"]
  on = "push"
}

action "WebPageTestAction" {
  uses = "JCofman/webPagetestAction@0.0.2"
}
