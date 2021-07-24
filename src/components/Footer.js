import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="footer">
      <div class="inner">
        <div class="footer">
          <span class="footer_logo">ARMARIO</span>
          <p class="footer_info">
            ⓒ 아리마리오 ARMARIO. (주)아리마리오 / CEO : 최승대 / 123-84-01349 /
            서울특별시 영등포구 여의대방로 25 <br />
            Copyright (C) ARMARIO. All right reserved.
          </p>
          <div class="footer_icon">
            <span class="facebook">
              <Link to="/">페이스북</Link>
            </span>
            <span class="instagram">
              <Link to="/">인스타그램</Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
