import React, { useState, useEffect } from 'react';
import Medium from '../Medium/Medium';
import SearchButton from '../SearchButton/SearchButton';
import BacteriaResult from '../BacteriaResult/BacteriaResult';
import './Tube.scss';
import axios from 'axios';

const Tube = () => {
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
  const [result, setResult] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const dummyData = {
    codeNumber: 40000,
    microorganisms: [
      {
        microorganism: 'Yersinia pestis',
        atypicalTests: ['NONE'],
        snippet:
          "Yersinia pestis (formerly Pasteurella pestis) is a gram-negative, non-motile, rod-shaped, coccobacillus bacterium, without spores. It is a facultative anaerobic organism that can infect humans via the Oriental rat flea (Xenopsylla cheopis). It causes the disease plague, which takes three main forms: pneumonic, septicemic, and bubonic. There may be evidence suggesting Y. pestis originated in Europe in the Cucuteni–Trypillia culture and not in Asia as is more commonly believed.Y. pestis was discovered in 1894 by Alexandre Yersin, a Swiss/French physician and bacteriologist from the Pasteur Institute, during an epidemic of the plague in Hong Kong. Yersin was a member of the Pasteur school of thought. Kitasato Shibasaburō, a Japanese bacteriologist who practised Koch's methodology, was also engaged at the time in finding the causative agent of the plague.",
        wikiTitle: 'Yersinia pestis',
      },
      {
        microorganism: 'Shigella sp.',
        atypicalTests: ['NONE'],
        snippet:
          'Shigella is a genus of bacteria that is Gram-negative, facultative anaerobic, non-spore-forming, nonmotile, rod-shaped and genetically closely related...',
        wikiTitle: 'Shigella',
      },
      {
        microorganism: 'Pantoea agglomerans',
        atypicalTests: ['ADO', 'ARA'],
        snippet:
          'Pantoea agglomerans is a Gram-negative bacterium that belongs to the family Erwiniaceae.\n' +
          "It was formerly called Enterobacter agglomerans, or Erwinia herbicola and is an ubiquitous bacterium commonly isolated from plant surfaces, seeds, fruit, and animal or human feces and can be found throughout a honeybee's environment.\n" +
          '\n' +
          '\n' +
          '== Bacteriology ==\n' +
          'Pantoea agglomerans can serve as a plant pathogen competitor for the management of plant diseases. Fire blight, a plant disease caused by bacterium Erwinia amylovora, is commonly found in pear and apple crops. After coming in contact with Erwinia amylovora, Pantoea agglomerans produces antibiotic properties that are toxic to the fire blight-inducing bacterium. It has been identified that it is possible that habitat modification or exclusion may also play a role in the effectiveness of the antibiosis of the fire blight biological control.Environmental factors influencing the growth and spread of Pantoea agglomerans include winter chilling, good sunlight exposure and quality air circulation.',
        wikiTitle: 'Pantoea agglomerans',
      },
    ],
  };

  const mediumArr = [
    glucose,
    lysine,
    ornithine,
    h2s,
    adonitol,
    lactose,
    arabinose,
    lactose,
    arabinose,
    sorbitol,
    vp,
    dulcitol,
    urea,
    citrate,
  ];

  const useEffectDependencies = [
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
  ];

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
        `http://127.0.0.1:3005/api/v1/results/${finalCode}`
      );
      console.log(res.data.data.result);
      setNotFound(false);
      setResult(res.data.data.result);
    } catch {
      setResult(null);
      setNotFound(true);
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

      {/* const result is what will replace dummy data */}
      <div className="border" />
      {result &&
        result.microorganisms.map((bacteria) => {
          return (
            <BacteriaResult bacteria={bacteria} key={bacteria.microorganism} />
          );
        })}
      {notFound && <h2>No bacteria found</h2>}
    </>
  );
};

export default Tube;
