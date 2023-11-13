
# 기능 설명 
1. 로그인 기능 
   - admin : 글 추가, 수정, 삭제 가능, 댓글 쓰기 가능  
   - outers : 글 읽기, 댓글 쓰기 가능 

2. 웹페이지 내에서 에디터로 글 작성 및 미리보기 가능



## TODO

[] 로그인 유무는 전역으로 상태관리 

[] 아토믹 디자인에 맞게 리팩토링 (나만의 기준 세우기)
- Atom : color, font, layout 같은 디자인 요소만 포함 (HTML는 따로 안 만듬)
- Molecule : SRP를 지키고 컨텍스트를 포함하지 않음, 한가지 기능만을 위한 HTML태그를 이용한 컴포넌트, 재사용이 쉬운 범용적 네이밍 (layout은 외부에서 주입),  (client component)
- Organism : 컨텍스트를 포함하고 layout을 정함  (server component , client component)
- Template : 외부로부터 주입받은 상태를 포함함(server component)
- Page : Template을 담은 (server component)

[] tinyMCE에 이미지 업로드 시 tmp 파일로 가지고 있다가 sumbit시 s3에 저장하고 url 받아와서 변경 후 DB에 저장


