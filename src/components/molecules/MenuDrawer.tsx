import { Button, Drawer, DrawerBody, DrawerContent } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
};

export const MenuDrawer: VFC<Props> = memo((props) => {
  const {
    onClose,
    isOpen,
    onClickHome,
    onClickUserManagement,
    onClickSetting
  } = props;
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerContent>
        <DrawerBody p={0} bg="gray.100">
          <Button w="100%" onClick={onClickHome}>
            TOP
          </Button>
          <Button w="100%" onClick={onClickUserManagement}>
            ユーザー一覧
          </Button>
          <Button w="100%" onClick={onClickSetting}>
            設定
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});
