import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Switch from "@mui/material/Switch";

////////
/////
const CatItem = (props) => {
  const { catName = "", available = false, subCat = [] } = props?.data;
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{catName}</Typography>
          <div style={{ marginTop: -8, right: 50, position: "absolute" }}>
            Availability
            <Switch checked={available} disabled />
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {subCat?.map((subItem, subCatCount) => (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{subItem.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {subItem?.items?.map((itemDetails, itemCount) => (
                  <DetailRow
                    data={itemDetails}
                    countChange={(id, count, isUnlimeted) =>
                      props?.countChange(
                        itemCount,
                        count,
                        isUnlimeted,
                        subCatCount
                      )
                    }
                  />
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const DetailRow = (props) => {
  const {
    name = "",
    colors = "",
    options = "",
    skuId = "",
    count = 0,
    unlimited = false
  } = props?.data;
  const [Unlimited, setunlimited] = React.useState(unlimited);
  const [Count, setCount] = React.useState(count);
  const [edited, setEdited] = React.useState(false);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        marginTop: 10
      }}
    >
      <div style={{ width: "20%" }}>{name}</div>
      <div style={{ width: "10%" }}>{colors}</div>
      <div style={{ width: "10%" }}>{options}</div>
      <div style={{ width: "10%" }}>{skuId}</div>
      <div style={{ width: "25%" }}>
        {!edited ? (
          Unlimited ? (
            "Unlimited"
          ) : (
            Count
          )
        ) : (
          <>
            <input
              type="number"
              disabled={Unlimited}
              onChange={(e) => e.target.value >= 0 && setCount(e.target.value)}
              value={Count}
              style={{ maxWidth: 30 }}
            />
            <input
              onChange={(e) => {
                setunlimited(e?.target?.checked);
                e?.target?.checked && setCount(0);
              }}
              checked={Unlimited}
              type="checkbox"
              name="unlimited"
            />
            <label for="vehicle3">Unlimited</label>
          </>
        )}
      </div>
      <div style={{ width: "25%" }}>
        {!edited ? (
          <button
            onClick={() => {
              setEdited(true);
            }}
          >
            Edit
          </button>
        ) : (
          <button
            onClick={() => {
              props?.countChange(skuId, Count, Unlimited);
              setEdited(false);
            }}
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default React.memo(CatItem);
