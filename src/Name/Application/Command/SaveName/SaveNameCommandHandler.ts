import type CommandHandler from "@/Bus/Application/CommandHandler";
import { type ResponseCommand} from "@/Bus/Domain/ResponseCommand";
import SaveNameCommand from '@/Name/Application/Command/SaveName/SaveNameCommand';
import type NameWriteModel from "@/Name/Application/NameWriteModel";

export default class SaveNameCommandHandler implements CommandHandler {
  private readonly nameWriteModel: NameWriteModel;

  constructor(nameWriteModel: NameWriteModel) {
    this.nameWriteModel = nameWriteModel;
  }

  public async invoke(command: SaveNameCommand): Promise<ResponseCommand> {
    try {
      this.nameWriteModel.save(command.name);

      return { success: true };
    } catch (e: any) {
      return { success: false, error: e.response?.data?.data || e.name || '' };
    }
  }
}