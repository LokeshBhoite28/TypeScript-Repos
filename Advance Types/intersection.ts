type Filedata = {
  path: string;
  content: string;
};

type DatabaseData = {
  connectionUrl: string;
  credentials: string;
};

type Status = {
  isOpen: boolean;
  errorMessage?: string;
};

type AccessedFileData = Filedata & Status;
type AccessedDatabasedata = DatabaseData & Status;

interface FiledataInterface {
  path: string;
  content: string;
};

interface DatabaseDataInterface {
  connectionUrl: string;
  credentials: string;
};

interface StatusInterface {
  isOpen: boolean;
  errorMessage?: string;
};

interface AccessedFileDataInterface extends Filedata, Status {}

