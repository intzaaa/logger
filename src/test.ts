import Logger from "./index";

const mainLogger = Logger("MAIN");

mainLogger("dbg", "This is a debug message");
mainLogger("inf", "This is an info message");
mainLogger("wrn", "This is a warn message");
mainLogger("err", "This is an error message");
mainLogger("silent", "This is a silent message");

const mainInfoLogger = mainLogger("inf");

mainInfoLogger("This is an info message, ha ha!");
