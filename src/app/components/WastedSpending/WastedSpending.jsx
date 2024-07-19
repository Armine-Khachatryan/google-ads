import React from "react";
// Styles
import { Wrapper } from "./WastedSpending.styles";
const WastedSpending = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="count-box">
          <p>
            <span>0</span>/ <span>100</span>
          </p>
        </div>
        <div className="wasted-info">
          <h2>wasted spending</h2>
          <h6>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </h6>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus
            error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>

      <hr />
    </Wrapper>
  );
};

export default WastedSpending;
