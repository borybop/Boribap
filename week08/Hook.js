// 아래와 같은 기능을 하는 코드를 다른 Hook를 사용하여 작성하라.

useMemo(() => {
    const fn = () => {
        console.log('hello world!');
    };
    return fn;
}, [])


