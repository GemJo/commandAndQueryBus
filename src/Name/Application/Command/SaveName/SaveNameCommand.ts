import Command from "@/Bus/Application/Message/Command";
export default class SaveNameCommand extends Command {
  public readonly name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  public get commandName(): string {
    return 'SaveNameCommand';
  }

  public get namespace(): string {
    return 'Name';
  }
}