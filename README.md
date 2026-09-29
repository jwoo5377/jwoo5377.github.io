# Jangwoo Park · Research & Design

연구와 디자인 작업을 계속 추가할 수 있는 개인 홈페이지입니다. Astro로 만든 정적 사이트이며, 로그인이나 데이터베이스 없이 GitHub Pages에서 운영할 수 있습니다.

## 현재 구성

- 홈: 소개, 대표 작업 3개, 학회 포스터, 연구 경험, 학력, 연락처
- 프로젝트 상세: DesignTrace / Interpreting Vague Design Requests / Balloon Apartment
- 웹 CV: 읽기 및 브라우저 인쇄·PDF 저장
- 모바일 화면, 키보드 탐색, 페이지 제목과 설명, 404 페이지

내용은 제공된 CV와 프로젝트 자료, 본인의 역할 설명을 바탕으로 정리했습니다. 이 폴더에는 웹에 필요한 글과 선택한 이미지만 있습니다. 원본 보고서·전체 슬라이드·실험 기록은 포함하지 않았습니다.

## 어디를 고치면 되나요?

| 바꾸려는 내용 | 파일 또는 폴더 |
|---|---|
| 이름·이메일·소개·연구실 경험·기술 목록 | `src/data/profile.json` |
| 프로젝트 설명과 역할 | `src/content/projects/`의 해당 `.md` 파일 |
| 프로젝트 이미지 | `src/assets/` |
| 첫 화면 배치·발표 목록 | `src/pages/index.astro` |
| CV의 항목 구성·추가 활동 | `src/pages/cv.astro` |
| 색·글꼴·여백 | `src/styles/global.css` |

프로젝트의 본문은 일반적인 Markdown 문서입니다. 첫 부분의 제목·기간·역할·이미지 정보와 그 아래 본문을 수정하면 목록과 상세 페이지에 반영됩니다. 한국어와 영어를 모두 입력할 수 있지만, 현재 사이트 언어와 주요 콘텐츠는 영어로 구성했습니다.

### 프로젝트 추가

1. `templates/project.md`를 `src/content/projects/새-프로젝트-이름.md`로 복사합니다.
2. 제목·요약·기간·역할·태그를 바꾸고 본문을 작성합니다.
3. 이미지가 있으면 `src/assets/`에 넣고 `hero`에 경로를 적습니다. 이미지가 없으면 프로젝트 제목을 표지로 사용합니다.
4. `draft: false`로 설정하면 페이지가 생성됩니다. `featured: true`면 대표 작업으로 표시됩니다. 순서는 `order` 숫자로 정합니다.
5. 로컬에서 확인한 다음 GitHub에 변경 사항을 올리면 홈페이지가 갱신됩니다.

`draft: true`는 생성되는 홈페이지에서 제외하는 설정입니다. GitHub 저장소 자체가 공개되어 있으면 초안 파일도 읽을 수 있으므로, 비공개 자료는 이 저장소 밖에서 보관합니다.

### 자료 링크 추가

공개용으로 고른 파일만 `public/materials/`에 넣은 다음, 프로젝트 앞부분의 `resources`에 추가합니다. 경로 앞에 `/`를 붙이지 않아도 됩니다.

```yaml
resources:
  - label: Poster PDF
    href: materials/my-poster.pdf
```

외부 코드·영상 주소도 같은 방식으로 `https://...`를 입력할 수 있습니다. 원본 CV는 아직 다운로드 파일로 넣지 않았으며, 현재 CV 페이지는 자료를 재구성한 웹 버전입니다.

## 내 PC에서 보기

Node.js 22.12 이상과 pnpm 11.19.0을 사용합니다. 현재 제작 환경에서는 Node.js 24로 확인했습니다.

```sh
pnpm install
pnpm dev
```

터미널에 표시되는 로컬 주소를 브라우저에서 엽니다. 글이나 코드를 저장하면 개발 화면에 반영됩니다.

```sh
pnpm build
pnpm preview
```

두 번째 명령 묶음은 배포될 파일을 생성하고 그 결과를 미리 보여줍니다. GitHub에는 `node_modules`와 `dist`를 올리지 않습니다. `.gitignore`에 이미 설정되어 있습니다.

## GitHub Pages로 공개하기

연결할 계정은 `jwoo5377`, 저장소 이름은 `jwoo5377.github.io`로 준비했습니다. 배포 후 사용할 주소는 `https://jwoo5377.github.io/`입니다.

**이 `website` 폴더의 내용이 저장소의 최상위가 되도록 올립니다.** 상위 프로젝트의 CV·원본 자료·검토 기록 전체를 올리는 방식이 아닙니다.

1. GitHub에서 공개 저장소를 만듭니다. 계정의 대표 홈페이지라면 저장소 이름을 `계정아이디.github.io`로 정합니다.
2. 이 폴더의 내용을 해당 저장소의 `main` 브랜치에 올립니다. 숨김 폴더인 `.github`와 `pnpm-lock.yaml`, `pnpm-workspace.yaml`도 포함합니다.
3. 저장소의 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 선택합니다.
4. 저장소의 **Actions → Publish portfolio** 실행 결과를 확인합니다. 필요하면 **Run workflow**를 눌러 실행합니다.
5. 완료되면 `https://계정아이디.github.io/`에서 열립니다.

일반 이름의 저장소를 쓰면 `https://계정아이디.github.io/저장소이름/`으로 열립니다. 두 경우의 기본 주소와 내부 링크 경로는 배포 환경에서 자동으로 설정하도록 구성했습니다. 실제 원격 배포는 아직 수행하지 않았습니다.

개인 도메인은 이후에 연결할 수 있습니다. GitHub Pages에서 도메인을 설정하고 DNS를 연결한 뒤 저장소 변수 `SITE_URL`을 `https://내도메인`으로 지정합니다. 필요하면 `public/CNAME`에 도메인을 기록합니다. `BASE_PATH`는 `/`로 설정합니다. 도메인 구입·갱신 비용은 호스팅과 별도입니다.

## 유지 관리 흐름

프로젝트 자료 정리 → 해당 Markdown 문서와 이미지 수정 → 로컬 확인 → GitHub 반영 → 자동 배포 순서입니다. 여기에서 “DesignTrace 결과 부분을 이 내용으로 바꿔줘”처럼 수정을 요청해도 됩니다.

현재 버전은 파일을 편집하는 방식입니다. 웹 관리자 화면은 없으며, 필요해지면 같은 콘텐츠를 바탕으로 별도의 편집 도구를 검토할 수 있습니다.

## 공식 참고 문서

- [GitHub Pages 개요 및 무료 공개 저장소 조건](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [Astro의 GitHub Pages 배포 안내](https://docs.astro.build/en/guides/deploy/github/)
- [Astro 콘텐츠 관리](https://docs.astro.build/en/guides/content-collections/)
- [GitHub Pages 개인 도메인](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)

## 이미지와 콘텐츠 기록

`docs/content-notes.md`에 현재 자료의 출처와 본인 기여, 아직 확인하지 않은 항목을 기록했습니다. 이 문서와 README는 홈페이지 페이지로 생성되지 않습니다.
