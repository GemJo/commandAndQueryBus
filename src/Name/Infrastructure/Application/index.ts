import SaveNameCommandHandler from "@/Name/Application/Command/SaveName/SaveNameCommandHandler";
import GetNameQueryHandler from "@/Name/Application/Query/GetName/GetNameQueryHandler";
import NameWriteModelApi from "@/Name/Infrastructure/NameWriteModelApi";
import NameReadModelApi from "@/Name/Infrastructure/NameReadModelApi";
export const saveNameCommandHandler = () => new SaveNameCommandHandler(
  new NameWriteModelApi(),
);
export const getNameQueryHandler = () => new GetNameQueryHandler(
  new NameReadModelApi(),
)