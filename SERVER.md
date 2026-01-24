# Oracle Cloud 서버 정보

## 서버 접속 정보

```bash
ssh -i /Users/devjonny/Documents/ssh/ssh-key-2025-12-25.key ubuntu@140.245.64.120
```

- **IP**: 140.245.64.120
- **User**: ubuntu
- **OS**: Ubuntu 22.04 (ARM/Ampere)
- **Region**: ap-chuncheon-1 (춘천)

## 도메인

- **URL**: https://devjonny.me
- **DNS**: Cloudflare (Proxied)
- **SSL**: Cloudflare Flexible

## 앱 경로

```
~/app/.next/standalone/    # Next.js 앱 실행 위치
~/app/.next/static/        # 정적 파일
~/app/public/              # public 폴더
```

## 주요 명령어

### PM2 (프로세스 관리)

```bash
pm2 list                    # 상태 확인
pm2 logs devjonny-blog      # 로그 보기
pm2 restart devjonny-blog   # 재시작
pm2 stop devjonny-blog      # 중지
pm2 delete devjonny-blog    # 삭제
```

### Nginx

```bash
sudo systemctl status nginx       # 상태 확인
sudo systemctl restart nginx      # 재시작
sudo nginx -t                     # 설정 테스트
sudo nano /etc/nginx/sites-available/devjonny-blog  # 설정 편집
```

### 방화벽 (iptables)

```bash
sudo iptables -L INPUT -n --line-numbers  # 규칙 확인
sudo netfilter-persistent save            # 저장
```

## 배포 방식

GitHub Actions로 `main` 브랜치에 push 시 자동 배포

### GitHub Secrets 필요:

| Name | Value |
|------|-------|
| OCI_HOST | 140.245.64.120 |
| OCI_USER | ubuntu |
| OCI_SSH_KEY | ~/.ssh/deploy_key (서버에서 생성한 키) |

## 수동 배포 (긴급 시)

```bash
# 서버 접속 후
cd ~/app/.next/standalone
git pull origin main  # 또는 직접 파일 업로드
pm2 restart devjonny-blog
```

## 트러블슈팅

### 사이트 접속 안 될 때

1. PM2 상태 확인: `pm2 list`
2. 앱 상태 확인: `curl -I http://localhost:3000`
3. Nginx 상태 확인: `sudo systemctl status nginx`
4. 방화벽 확인: `sudo iptables -L INPUT -n`

### iptables 80/443 포트 열기

```bash
sudo iptables -I INPUT 5 -p tcp --dport 80 -j ACCEPT
sudo iptables -I INPUT 5 -p tcp --dport 443 -j ACCEPT
sudo netfilter-persistent save
```

## Cloudflare 설정

- **DNS**: A 레코드 → 140.245.64.120 (Proxied)
- **SSL/TLS**: Flexible
- **캐시 삭제**: Caching → Configuration → Purge Everything
