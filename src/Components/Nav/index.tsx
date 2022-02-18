import { AmplifySignOut } from "@aws-amplify/ui-react/legacy";
import { Link } from "react-router-dom";
import { Badge, Card, Divider, Flex, View } from "@aws-amplify/ui-react";
import Banner from "../Banner";

type NavProps = {
  readonly username: string;
};

const Nav = ({ username }: NavProps) => {
  return (
    <View position={"sticky"} top={0}>
      <Banner />
      <Card width={"100%"} variation={"elevated"}>
        <Flex
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Badge variation="info">{`Welcome ${username}!`}</Badge>
          <Divider orientation="vertical" />
          <Flex alignItems="center" justifyContent="center">
            <Link to="/">Home</Link>
            <Divider orientation="vertical" />
            <Link to="/blog">Blog</Link>
          </Flex>
          <Divider orientation="vertical" />
          <AmplifySignOut />
        </Flex>
      </Card>
    </View>
  );
};

export default Nav;
