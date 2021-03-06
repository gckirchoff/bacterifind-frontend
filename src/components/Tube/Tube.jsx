import React, { useState, useEffect } from 'react';
import Medium from '../Medium/Medium';
import SearchButton from '../SearchButton/SearchButton';
import BacteriaResult from '../BacteriaResult/BacteriaResult';
import NewNoteForm from '../NewNoteForm/NewNoteForm';
import './Tube.scss';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { createNote } from '../../state';

const Tube = () => {
  const dispatch = useDispatch();
  const reduxUser = useSelector((state) => state.user.user);
  const onNewNoteCreation = async (noteInfo) => {
    // const { data } = await axios.post(
    //   process.env.NODE_ENV === 'production'
    //     ? '/api/v1/notes'
    //     : 'http://127.0.0.1:3005/api/v1/notes',
    //   { ...noteInfo, user: user.id, date: Date.now() }
    // );
    // console.log(data);
    // setNotes([...notes, data.data.newNote]);
    dispatch(createNote(noteInfo, reduxUser.id));
  };
  const [glucose, setGlucose] = useState({ result: 'glucose-n', code: 0 });
  const [lysine, setLysine] = useState({ result: 'lysine-n', code: 0 });
  const [ornithine, setOrnithine] = useState({
    result: 'ornithine-n',
    code: 0,
  });
  const [h2s, setH2s] = useState({ result: 'h2s-n', code: 0 });
  const [adonitol, setAdonitol] = useState({ result: 'adonitol-n', code: 0 });
  const [lactose, setLactose] = useState({ result: 'lactose-n', code: 0 });
  const [arabinose, setArabinose] = useState({
    result: 'arabinose-n',
    code: 0,
  });
  const [sorbitol, setSorbitol] = useState({ result: 'sorbitol-n', code: 0 });
  const [vp, setVp] = useState({ result: 'vp-n', code: 0 });
  const [dulcitol, setDulcitol] = useState({ result: 'dulcitol-n', code: 0 });
  const [urea, setUrea] = useState({ result: 'urea-n', code: 0 });
  const [citrate, setCitrate] = useState({ result: 'citrate-n', code: 0 });
  const [finalCode, setFinalCode] = useState('00000');
  const [idOne, setIdOne] = useState(0);
  const [idTwo, setIdTwo] = useState(0);
  const [idThree, setIdThree] = useState(0);
  const [idFour, setIdFour] = useState(0);
  const [idFive, setIdFive] = useState(0);
  const [microorganisms, setMicroorganisms] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [found, setFound] = useState(false);

  const handleGlucose = () => {
    glucose.result === 'glucose-n'
      ? setGlucose({ result: 'glucose-p', code: 4 })
      : glucose.result === 'glucose-p'
      ? setGlucose({ result: 'glucose-p-g', code: 6 })
      : setGlucose({ result: 'glucose-n', code: 0 });
  };

  const handleLysine = () => {
    lysine.result === 'lysine-n'
      ? setLysine({ result: 'lysine-p', code: 1 })
      : setLysine({ result: 'lysine-n', code: 0 });
  };

  const handleOrnithine = () => {
    ornithine.result === 'ornithine-n'
      ? setOrnithine({ result: 'ornithine-p', code: 4 })
      : setOrnithine({ result: 'ornithine-n', code: 0 });
  };

  const handleH2s = () => {
    h2s.result === 'h2s-n'
      ? setH2s({ result: 'h2s-p', code: 2 })
      : h2s.result === 'h2s-p'
      ? setH2s({ result: 'h2s-indole', code: 3 })
      : setH2s({ result: 'h2s-n', code: 0 });
  };

  const handleAdonitol = () => {
    adonitol.result === 'adonitol-n'
      ? setAdonitol({ result: 'adonitol-p', code: 4 })
      : setAdonitol({ result: 'adonitol-n', code: 0 });
  };

  const handleLactose = () => {
    lactose.result === 'lactose-n'
      ? setLactose({ result: 'lactose-p', code: 2 })
      : setLactose({ result: 'lactose-n', code: 0 });
  };

  const handleArabinose = () => {
    arabinose.result === 'arabinose-n'
      ? setArabinose({ result: 'arabinose-p', code: 1 })
      : setArabinose({ result: 'arabinose-n', code: 0 });
  };

  const handleSorbitol = () => {
    sorbitol.result === 'sorbitol-n'
      ? setSorbitol({ result: 'sorbitol-p', code: 4 })
      : setSorbitol({ result: 'sorbitol-n', code: 0 });
  };

  const handleVp = () => {
    vp.result === 'vp-n'
      ? setVp({ result: 'vp-p', code: 2 })
      : setVp({ result: 'vp-n', code: 0 });
  };

  const handleDulcitol = () => {
    dulcitol.result === 'dulcitol-n'
      ? setDulcitol({ result: 'dulcitol-p', code: 1 })
      : dulcitol.result === 'dulcitol-p'
      ? setDulcitol({ result: 'phenylalanine', code: 4 })
      : setDulcitol({ result: 'dulcitol-n', code: 0 });
  };

  const handleUrea = () => {
    urea.result === 'urea-n'
      ? setUrea({ result: 'urea-p', code: 2 })
      : setUrea({ result: 'urea-n', code: 0 });
  };

  const handleCitrate = () => {
    citrate.result === 'citrate-n'
      ? setCitrate({ result: 'citrate-p', code: 1 })
      : setCitrate({ result: 'citrate-n', code: 0 });
  };

  useEffect(() => {
    let groupOne = 0;
    let groupTwo = 0;
    let groupThree = 0;
    let groupFour = 0;
    let groupFive = 0;

    // Group 1
    if (glucose.result === 'glucose-p') {
      groupOne += glucose.code;
    }
    if (glucose.result === 'glucose-p-g') {
      groupOne += glucose.code;
    }
    if (lysine.result === 'lysine-p') {
      groupOne += lysine.code;
    }

    setIdOne(groupOne);

    // Group 2
    if (ornithine.result === 'ornithine-p') {
      groupTwo += ornithine.code;
    }
    if (h2s.result === 'h2s-p') {
      groupTwo += h2s.code;
    }
    if (h2s.result === 'h2s-indole') {
      groupTwo += h2s.code;
    }

    setIdTwo(groupTwo);

    // Group 3
    if (adonitol.result === 'adonitol-p') {
      groupThree += adonitol.code;
    }
    if (lactose.result === 'lactose-p') {
      groupThree += lactose.code;
    }
    if (arabinose.result === 'arabinose-p') {
      groupThree += arabinose.code;
    }

    setIdThree(groupThree);

    // Group 4
    if (sorbitol.result === 'sorbitol-p') {
      groupFour += sorbitol.code;
    }
    if (vp.result === 'vp-p') {
      groupFour += vp.code;
    }
    if (dulcitol.result === 'dulcitol-p') {
      groupFour += dulcitol.code;
    }

    setIdFour(groupFour);

    // Group 5
    if (dulcitol.result === 'phenylalanine') {
      groupFive += dulcitol.code;
    }
    if (urea.result === 'urea-p') {
      groupFive += urea.code;
    }
    if (citrate.result === 'citrate-p') {
      groupFive += citrate.code;
    }

    setIdFive(groupFive);

    setFinalCode(`${groupOne}${groupTwo}${groupThree}${groupFour}${groupFive}`);
  }, [
    adonitol.code,
    adonitol.result,
    arabinose.code,
    arabinose.result,
    citrate.code,
    citrate.result,
    dulcitol.code,
    dulcitol.result,
    glucose.code,
    glucose.result,
    h2s.code,
    h2s.result,
    lactose.code,
    lactose.result,
    lysine.code,
    lysine.result,
    ornithine.code,
    ornithine.result,
    sorbitol.code,
    sorbitol.result,
    urea.code,
    urea.result,
    vp.code,
    vp.result,
  ]);

  const handleSearchClick = async () => {
    try {
      const res = await axios.get(
        process.env.NODE_ENV === 'production'
          ? `/api/v1/results/${finalCode}`
          : `http://127.0.0.1:3005/api/v1/results/${finalCode}`
      );
      setNotFound(false);
      setFound(true);
      setMicroorganisms(res.data.data.result.microorganisms);
    } catch {
      setMicroorganisms([]);
      setNotFound(true);
      setFound(false);
    }
  };

  return (
    <>
      <div className="tube">
        <div className="corner corner-start"></div>
        <Medium
          medium={'glucose'}
          handleClick={handleGlucose}
          value={glucose}
        />
        <Medium medium={'lysine'} handleClick={handleLysine} value={lysine} />
        <Medium
          medium={'ornithine'}
          handleClick={handleOrnithine}
          value={ornithine}
        />
        <Medium medium={'h2s'} handleClick={handleH2s} value={h2s} />
        <Medium
          medium={'adonitol'}
          handleClick={handleAdonitol}
          value={adonitol}
        />
        <Medium
          medium={'lactose'}
          handleClick={handleLactose}
          value={lactose}
        />
        <Medium
          medium={'arabinose'}
          handleClick={handleArabinose}
          value={arabinose}
        />
        <Medium
          medium={'sorbitol'}
          handleClick={handleSorbitol}
          value={sorbitol}
        />
        <Medium medium={'voges-proskauer'} handleClick={handleVp} value={vp} />
        <Medium
          medium={'dulcitol'}
          handleClick={handleDulcitol}
          value={dulcitol}
        />
        <Medium medium={'urea'} handleClick={handleUrea} value={urea} />
        <Medium
          medium={'citrate'}
          handleClick={handleCitrate}
          value={citrate}
        />
        <div className="corner corner-end"></div>
      </div>
      <div className="id-calc-container">
        <div className="triangle triangle-1" />
        <div className="triangle triangle-2" />
        <div className="triangle triangle-3" />
        <div className="triangle triangle-4" />
        <div className="triangle triangle-5" />
        <h3 className="id id-1">{idOne}</h3>
        <h3 className="id id-2">{idTwo}</h3>
        <h3 className="id id-3">{idThree}</h3>
        <h3 className="id id-4">{idFour}</h3>
        <h3 className="id id-5">{idFive}</h3>
      </div>
      <div className="search-btn-container">
        <SearchButton
          finalCode={finalCode}
          handleSearchClick={handleSearchClick}
        />
      </div>

      <div className="border" />
      {microorganisms.map((bacteria) => {
        return (
          <BacteriaResult bacteria={bacteria} key={bacteria.microorganism} />
        );
      })}
      {notFound && <h2>No bacteria found</h2>}
      {found && reduxUser !== null && (
        <NewNoteForm
          key={finalCode}
          onSubmit={onNewNoteCreation}
          defaultCode={finalCode}
          marginLeft
        />
      )}
    </>
  );
};

export default Tube;
