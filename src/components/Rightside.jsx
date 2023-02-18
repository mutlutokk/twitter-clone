import React, { useState } from "react";
import "../style/Rightside.css";
import { CiSearch } from "react-icons/ci";
import { IoIosMore } from "react-icons/io";
import { CgSmileSad } from "react-icons/cg";

const Rightside = () => {
  const [agendarep, setAgendarep] = useState(false);

  const handleClickAgenda = () => {
    setAgendarep(true);
  };

  const handleClickAgendaFalse = () => {
    setAgendarep(false);
  };

  return (
    <>
      <div className="search">
        <div className="search-icon">
          <CiSearch />
        </div>
        <div className="inputt">
          <input placeholder="Twitter'da Ara" />
        </div>
      </div>

      {agendarep && (
        <div className="agenda-rep">
          <div className="agenda-rep-in" onClick={handleClickAgendaFalse}>
            <CgSmileSad />
            <span>İlgimi çekmiyor</span>
          </div>
          <div className="agenda-rep-in" onClick={handleClickAgendaFalse}>
            <CgSmileSad />
            <span>Bu gündem başlığı zararlı veya spam içeriyor</span>
          </div>
        </div>
      )}

      <div className="agenda">
        <h3>İlgini çekebilecek gündemler</h3>
        <div className="agenda-in">
          <div>
            <div>Türkiye tarihinde gündemde</div>
            <div className="subject">Yazılım</div>
            <div>986,8 B Tweet</div>
          </div>
          <div>
            <div className="agenda-icon" onClick={handleClickAgenda}>
              <IoIosMore />
            </div>
          </div>
        </div>
        <div className="agenda-in">
          <div>
            <div>Türkiye tarihinde gündemde</div>
            <div className="subject">Deprem</div>
            <div>803,5 B Tweet </div>
          </div>
          <div>
            <div className="agenda-icon" onClick={handleClickAgenda}>
              <IoIosMore />
            </div>
          </div>
        </div>
        <div className="agenda-in">
          <div>
            <div>Türkiye tarihinde gündemde</div>
            <div className="subject">Gökyüzü</div>
            <div>800,1 B Tweet </div>
          </div>
          <div>
            <div className="agenda-icon" onClick={handleClickAgenda}>
              <IoIosMore />
            </div>
          </div>
        </div>
        <div className="agenda-in">
          <div>
            <div>Türkiye tarihinde gündemde</div>
            <div className="subject">Sağlık</div>
            <div>235,9 B Tweet </div>
          </div>
          <div>
            <div className="agenda-icon" onClick={handleClickAgenda}>
              <IoIosMore />
            </div>
          </div>
        </div>
        <div className="agenda-in">
          <div>
            <div>Türkiye tarihinde gündemde</div>
            <div className="subject">Tatil</div>
            <div>181,2 B Tweet </div>
          </div>
          <div>
            <div className="agenda-icon" onClick={handleClickAgenda}>
              <IoIosMore />
            </div>
          </div>
        </div>
        <div className="agenda-in">
          <div>
            <div>Türkiye tarihinde gündemde</div>
            <div className="subject">Bilgisayar</div>
            <div>505,8 B Tweet </div>
          </div>
          <div>
            <div className="agenda-icon" onClick={handleClickAgenda}>
              <IoIosMore />
            </div>
          </div>
        </div>
        <div className="agenda-in">
          <div>
            <div>Türkiye tarihinde gündemde</div>
            <div className="subject">#kediler</div>
            <div>698,7 B Tweet </div>
          </div>
          <div>
            <div className="agenda-icon" onClick={handleClickAgenda}>
              <IoIosMore />
            </div>
          </div>
        </div>
        <div className="agenda-in">
          <div>
            <div>Türkiye tarihinde gündemde</div>
            <div className="subject">Kocaeli</div>
            <div>104 B Tweet </div>
          </div>
          <div>
            <div className="agenda-icon" onClick={handleClickAgenda}>
              <IoIosMore />
            </div>
          </div>
        </div>
        <div className="agenda-in">
          <div>
            <div>Türkiye tarihinde gündemde</div>
            <div className="subject">Futbol</div>
            <div>208,8 B Tweet </div>
          </div>
          <div>
            <div className="agenda-icon" onClick={handleClickAgenda}>
              <IoIosMore />
            </div>
          </div>
        </div>
        <div className="agenda-in">
          <div>
            <div>Türkiye tarihinde gündemde</div>
            <div className="subject">Dehşet</div>
            <div>33,4 B Tweet </div>
          </div>
          <div>
            <div className="agenda-icon" onClick={handleClickAgenda}>
              <IoIosMore />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rightside;
