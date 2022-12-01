FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["Ozon/Ozon.csproj", "Ozon/"]
RUN dotnet restore "Ozon/Ozon.csproj"
COPY . .
WORKDIR "/src/Ozon"
RUN dotnet build "Ozon.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Ozon.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Ozon.dll"]
