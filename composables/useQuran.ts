import { _get } from "waelio-utils";
// @ts-ignore
import { _ } from "lodash";
import type { SuraT } from "../types/index";

const { note } = useNote();
const _quran: SuraT[] = [];
let legends: string[] = [];
let loading = false;
let size = 0;
const sanetize = (payload: SuraT[]) => {
  return _get(_get(payload));
};
export const useQuran = () => {
  const noLocalCach = _quran && _quran.length && _quran.length === 14;
  const fetchData = () => {
    loading = true;

    useFetch<Promise<SuraT[]>>("/api/quran")
      // @ts-ignore
      .then(async (res) => {
        size = res.Size;
        _quran.push(sanetize(res.Quran));
        console.log(await res.Size);
        legends = await res.Legend;

        loading = false;
        note.success("quran successfuly loaded ...");
        return _quran;
      })
      .catch((error) => {
        note.log(error);
        note.error(error);
        loading = false;
      });
  };
  return {
    start: fetchData,
    quran: _quran,
    loading,
    legends,
  };
};

export default useQuran;
