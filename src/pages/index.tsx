import React from "react";
import {
  LinkWrapper,
  SEO,
  ButtonLink,
  TextBlock,
  ListItem,
  UnorderedList,
} from "../components";

export default () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h2>
      What is the Windfall Elimination Provision?
    </h2>
    <TextBlock>
      If you worked in a job that did not pay Social Security taxes, you may be affected by the Windfall Elimination Provision (WEP). WEP is a Social Security rule which may reduce your Social Security retirement benefits by up to 50%.
    </TextBlock>

    <h2>Who is affected?</h2>
    <TextBlock>
      People who worked in state and local government in Massachusetts, Kentucky, Ohio, Indiana, and Texas are most likely to be affected. Continue to see how your retirement benefits will be impacted by WEP.

    </TextBlock>
    <h2>This app will:</h2>
    <TextBlock>
        <UnorderedList>
          <ListItem>walk you through how the formula works</ListItem>
          <ListItem>help you estimate how WEP will affect you when you retire</ListItem>
          <ListItem>help you handle an overpayment</ListItem>
          <ListItem>give you some starting points to take political action</ListItem>
        </UnorderedList>
    </TextBlock>

    <h2>Privacy Disclaimer</h2>
    <TextBlock>
      This application is intended as a tool for users to calculate their
      Social Security benefits. No data is saved, stored, or passed along
      to third-party services and/or gorvenmental enteties. All data is
      deleted after use.
    </TextBlock> 
    
    <h2>Legal Disclaimer</h2>
    <TextBlock>
      This site is for informational purposes only, and should not be taken as
      legal, tax, investment, financial, or other advice. You should consult
      with a financial advisor or attorney to determine what is best for your
      individual circumstances. Congressman Moulton's office and Code for Boston
      may not be held liable for damages arising from any decision you make
      based on the information on this site. Please note that the SSA updates
      the formulas used to calculate benefit amounts yearly. Therefore, it is
      likely that your benefit estimates in the future will differ from those
      calculated today.
    </TextBlock>
    <LinkWrapper>
      <ButtonLink to="/prescreen-1a/">Get Started</ButtonLink>
    </LinkWrapper>
  </>
);
